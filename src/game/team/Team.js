import Character from '../character/Character'
import TeamConsts from './TeamConsts';
import { areCharacters } from '../TypeChecker';

class Team {
    constructor() {
        this.team = [];
    }

    insertCharacter(character) {
        areCharacters(character);
        if (!this.isFull()) {
            this.team.push(character);
        }
    }

    isFull() {
        return this.team.length >= TeamConsts.TeamMaxLength;
    }

    getNextToAttack() {
        let maxInitiative = TeamConsts.ImpossibleInitiative;
        let choosenCharacter = null;
        this.team.forEach(character => {
            if (character.getInitiative() > maxInitiative && !character.isDead()) {
                maxInitiative = character.getInitiative();
                choosenCharacter = character;
            }
        });
        return choosenCharacter;
    }

    increaseAllInitiative() {
        this.team.forEach(character => {
            character.increaseInitiative();
        });
    }
}

export default Team;