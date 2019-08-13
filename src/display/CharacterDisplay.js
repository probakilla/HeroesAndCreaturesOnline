import React from 'react';
import { Col } from 'react-bootstrap';
import { getRandomInteger } from '../game/generators/Generator';
import '../css/Character.css';

const ImgPath = process.env.PUBLIC_URL + '/images/';
const RipImage = ImgPath + 'rip.png';
const NoDamages = 0;
const ImgList = ['character.png', 'archer.png', 'wizzard.png', 'rogue.png'];

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.character = props.character;
        this.block = NoDamages;
        this.spriteUrl = this.randomCharacterImgPath();
        this.state = {
            characterDisplay: this.character.toString(),
            image: <img src={this.spriteUrl} alt='alive-character' />,
            id: props.id
        };
    }

    randomCharacterImgPath = () => {
        let randomChoice = getRandomInteger(0, ImgList.length);
        return ImgPath + ImgList[randomChoice];
    };

    handleClick = () => {
        this.blockDamages();
    };

    blockDamages = () => {
        if (!this.character.isDead()) {
            this.character.block(this.block);
            this.setState({
                characterDisplay: this.character.toString()
            });
            if (this.character.isDead()) {
                this.setState({
                    image: <img src={RipImage} alt='dead-character' />,
                    characterDisplay: this.character.toString()
                });
            }
            window.gameScript.playTurn();
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

    enableOnClick = power => {
        this.block = power;
        let element = document.getElementById(this.state.id);
        element.addEventListener('click', this.blockDamages, false);
    };

    disableOnClick = () => {
        this.block = NoDamages;
        let characterElement = document.getElementById(this.state.id);
        characterElement.removeEventListener('click', this.blockDamages, false);
    };

    render() {
        return (
            <Col id={this.state.id} data-testid='character-display'>
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
