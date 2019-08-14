import React from 'react';
import { Col } from 'react-bootstrap';
import ImageManager from './graphic/ImageManager';
import Animations from './graphic/Animations';
import sleep from './Sleep';
import '../css/Character.css';

const NoDamages = 0;

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.animations = new Animations();
        this.character = props.character;
        this.block = NoDamages;
        this.spriteUrl = ImageManager.getRandomCharacterImg();
        this.state = {
            characterDisplay: this.character.toString(),
            id: props.id,
            image: <img className='character-img' id={props.id + '-img'} src={this.spriteUrl} alt='alive-character' />
        };
    }

    blockDamages = async () => {
        if (!this.character.isDead()) {
            await this.animations.dmgAnimation(this.getImage());
            this.character.block(this.block);
            if (this.character.isDead()) {
                await this.animations.fadeOutAnimation(this.getImage());
            }
            this.refreshStats();
            window.gameScript.playTurn();
        }
    };

    getImage = () => {
        let id = this.state.id + '-img';
        return document.getElementById(id);
    };

    increaseInitiative = async () => {
        this.character.increaseInitiative();
        this.refreshStats();
    };

    refreshStats = () => {
        this.setState({
            characterDisplay: this.character.toString()
        });
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
