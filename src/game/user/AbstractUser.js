import { isTeam, areNumbers } from '../TypeChecker';

class AbstractUser {
    constructor(team) {
        if (this.constructor === AbstractUser) {
            throw new TypeError('AbstractUser cannot be instanciated directly (abstract class)');
        }
        isTeam(team);
        this.team = team;
    }

    getNextToAttack() {
        return this.team.getNextToAttack();
    }

    increaseAllInitiative() {
        this.team.increaseAllInitiative();
    }

    play(oppositeTeam) {
        throw new Error('Not implemented');
    }

    isTargetValid(oppositeTeam, target) {
        areNumbers(target);
        isTeam(oppositeTeam);
        return !oppositeTeam[target].isDead();
    }
}