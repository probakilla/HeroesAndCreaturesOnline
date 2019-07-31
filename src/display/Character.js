import React from 'react';
import { Col } from 'react-bootstrap';
import Character from '../game/character/Character';
import Weapon from '../game/weapon/Weapon';
import './Character.css';

const MaxStat = 100;
const MinStat = 10;
const MaxWeapon = 30;
const CharacterImgUrl = process.env.PUBLIC_URL + '/character.png';

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function getRandomCharacter() {
    let character = new Character(getRandomInteger(MinStat, MaxStat), getRandomInteger(MinStat, MaxStat));
    character.equipWeapon(new Weapon(getRandomInteger(MinStat, MaxWeapon)));
    return character;
}

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.character = getRandomCharacter();
        this.state = {
            characterDisplay: this.character.toString()
        };
        this.blockDamages = this.blockDamages.bind(this);
    }

    handleClick = () => {
        this.blockDamages();
    }

    blockDamages = () => {
        this.character.block(10);
        this.setState({
            characterDisplay: this.character.toString()
        });
    }

    render() {
        return (
            <Col onClick={this.handleClick}>
                <img src={CharacterImgUrl} alt='character' />
                <br />
                <p className='character-text'>{this.state.characterDisplay}</p>
            </Col>
        );
    }
}

export default CharacterDisplay;
