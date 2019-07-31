import TeamConsts from './TeamConsts';
import { isCharacter } from '../TypeChecker';

class Team {
    constructor() {
        this.team = [];
    }

    insertCharacter(character) {
        isCharacter(character);
        if (!this.isFull()) {
            this.team.push(character);
        } else {
            throw new Error('Team is full');
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

    getNbAlive() {
        let cpt = 0;
        team.forEach(character => {
            if (!character.isDead()) {
                cpt++;
            }
        })
        return cpt;
    }
}

export default Team;