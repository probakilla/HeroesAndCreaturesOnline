import React from 'react';
import { Col } from 'react-bootstrap';
import '../css/Character.css';

const CharacterImgUrl = process.env.PUBLIC_URL + '/images/character.png';
const RipImage = process.env.PUBLIC_URL + '/images/rip.png';

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.character = props.character;
        this.state = {
            characterDisplay: this.character.toString(),
            image: <img src={CharacterImgUrl} alt='alive-character' />
        };
    }

    handleClick = () => {
        this.blockDamages();
    }

    blockDamages = () => {
        this.character.block(10);
        this.setState({
            characterDisplay: this.character.toString()
        });
        if (this.character.isDead()) {
            this.setState({
                image: <img src={RipImage} alt="dead-character"/>
            });
        }
    }

    increaseInitiative = () => {
        this.character.increaseInitiative();
        this.setState({
            characterDisplay: this.character.toString()
        })
    }

    render() {
        return (
            <Col data-testid="character-display" onClick={this.handleClick}>
                {this.state.image}
                <br />
                <p className='character-text' data-testid="char-stats">{this.state.characterDisplay}</p>
            </Col>
        );
    }
}

export default CharacterDisplay;
