import ComputerUser from '../game/user/ComputerUser';
import AbstractUser from '../game/user/AbstractUser';
import Team from '../game/team/Team';
import Character from '../game/character/Character';

const MaxTeamLength = 4;

function getFullTeam() {
    let team = new Team();
    for (let i = 0; i < MaxTeamLength; ++i) {
        team.insertCharacter(new Character(i + 1, i + 1));
    }
    return team;
}

function getWeakTeam() {
    let team = new Team();
    for (let i = 0; i < MaxTeamLength; ++i) {
        team.insertCharacter(new Character(1, 1));
    }
    return team;
}

function getCpuUser() {
    let team = getFullTeam();
    return new ComputerUser(team);
}

describe('User tests', () => {
    it('Abstract user instanciation fail test', () => {
        const fail = () => {
            new AbstractUser(null);
        };
        expect(fail).toThrowError(TypeError);
    });

    it('Computer user instanciation fail test', () => {
        const fail = () => {
            new ComputerUser('notateam');
        };
        expect(fail).toThrowError(TypeError, 'Not a team');
    });

    it('Computer user instanciation success test', () => {
        const success = () => {
            new ComputerUser(new Team());
        };
        expect(success).not.toThrowError();
    });

    it('Computer user get next to attack test', () => {
        let cpu = getCpuUser();
        let character = cpu.getNextToAttack();
        expect(character instanceof Character).toEqual(true);
    });

    it('Computer user increase all initiative test', () => {
        let cpu = getCpuUser();
        cpu.increaseAllInitiative();
        let character = cpu.getNextToAttack();
        expect(character.getHealth()).toEqual(MaxTeamLength);
    });

    it('Computer user get nb alive test', () => {
        const cpu = getCpuUser();
        expect(cpu.getNbAlive()).toEqual(MaxTeamLength);
    });

    it('Computer user play test', () => {
        const cpu = getCpuUser();
        let team = getWeakTeam();
        cpu.play(team);
        expect(team.getNbAlive()).toEqual(3);
        cpu.play(team);
        expect(team.getNbAlive()).toEqual(2);
        cpu.play(team);
        expect(team.getNbAlive()).toEqual(1);
        cpu.play(team);
        expect(team.getNbAlive()).toEqual(0);
    })
});
