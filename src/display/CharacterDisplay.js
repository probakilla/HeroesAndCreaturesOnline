import React from 'react';
import { Col } from 'react-bootstrap';
import ImageManager from './graphic/ImageManager';
import sleep from './Sleep';
import '../css/Character.css';

const NoDamages = 0;
const FadeTime = 1000;
const DmgTime = 200;

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.character = props.character;
        this.block = NoDamages;
        this.spriteUrl = ImageManager.getRandomCharacterImg();
        this.state = {
            characterDisplay: this.character.toString(),
            id: props.id,
            image: <img className='character-img' id={props.id + '-img'} src={this.spriteUrl} alt='alive-character' />
        };
    }

    handleClick = () => {
        this.blockDamages();
    };

    blockDamages = async () => {
        if (!this.character.isDead()) {
            await this.damageAnimation();
            this.character.block(this.block);
            this.setState({
                characterDisplay: this.character.toString()
            });
            if (this.character.isDead()) {
                this.fadeOutImage();
            }
            window.gameScript.playTurn();
        }
    };

    getImage = () => {
        let id = this.state.id + '-img';
        return document.getElementById(id);
    };

    fadeOutImage = async () => {
        let image = this.getImage();
        if (image) {
            image.classList.add('fade');
        }
        await sleep(FadeTime);
        const ripImg = ImageManager.getRipImg();
        this.setState({
            image: <img src={ripImg} alt='dead-character' />,
            characterDisplay: this.character.toString()
        });
    };

    damageAnimation = async () => {
        let image = this.getImage();
        const saveImg = image.getAttribute('src');
        const dmgImg = ImageManager.getDmgImg();
        image.setAttribute('src', dmgImg);
        await sleep(DmgTime);
        image.setAttribute('src', saveImg);
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
            this.fadeOutImage();
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
