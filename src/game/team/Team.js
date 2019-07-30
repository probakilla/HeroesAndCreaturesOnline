import Character from '../character/Character'
import TeamConsts from './TeamConsts';

class Team {
    constructor() {
        this.team = [];
    }

    insertCharacter(character) {
        this.characterCheck(character);
        if (!this.isFull()) {
            this.team.push(character);
        }
    }

    isFull() {
        return this.team.length >= TeamConsts.TeamMaxLength;
    }

    characterCheck(character) {
        if (!character instanceof Character) {
            throw new Error('Not a Character');
        }
    }
}

export default Team;