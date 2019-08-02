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
            image: <img src={CharacterImgUrl} alt='alive-character' />,
            id: props.id
        };
    }

    handleClick = () => {
        this.blockDamages();
    };

    blockDamages = () => {
        this.character.block(10);
        this.setState({
            characterDisplay: this.character.toString()
        });
        if (this.character.isDead()) {
            this.setState({
                image: <img src={RipImage} alt='dead-character' />,
                characterDisplay: this.character.toString()
            });
        }
    };

    increaseInitiative = () => {
        this.character.increaseInitiative();
        this.setState({
            characterDisplay: this.character.toString()
        });
    };

    refreshStats = () => {
        this.setState({
            characterDisplay: this.character.toString()
        });
        if (this.character.isDead()) {
            this.setState({
                image: <img src={RipImage} alt='dead-character' />
            });
        }
    };

    render() {
        return (
            <Col id={this.state.id} data-testid='character-display' onClick={this.handleClick}>
                {this.state.image}
                <br />
                <p id={this.state.id + '-stats'} className='character-text' data-testid='char-stats'>
                    {this.state.characterDisplay}
                </p>
            </Col>
        );
    }
}

export default CharacterDisplay;
