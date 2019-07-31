import AbstractUser from './AbstractUser';
import { isTeam } from '../TypeChecker';
import TeamConsts from '../team/TeamConsts';

function getRandomNumber(range) {
    return Math.floor(Math.random() * range);
}

class ComputerUser extends AbstractUser {
    constructor(team) {
        super(team);
    }

    play(oppositeTeam) {
        isTeam(oppositeTeam);
        let next = this.getNextToAttack();
        let choice;
        do {
            choice = getRandomNumber(TeamConsts.TeamMaxLength);
            if (this.isTargetValid(oppositeTeam, choice)) {
                break;
            }
        } while (true);
        oppositeTeam.team[choice].block(next.attack());
    }
}

export default ComputerUser;