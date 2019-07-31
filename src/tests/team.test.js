import Team from '../game/team/Team';
import Character from '../game/character/Character';

const MaxTeamLength = 4;
const DefaultInit = 0;

describe('Team tests', () => {
    let fixture;

    beforeEach(() => {
        fixture = new Team();
    });

    afterEach(() => {
        fixture = null;
    });

    function fillUpTeam() {
        for (let i = 0; i < MaxTeamLength; ++i) {
            fixture.insertCharacter(new Character(i + 1, i + 1));
        }
    }

    it('Team initialization test', () => {
        expect(Array.isArray(fixture.team)).toEqual(true);
    });

    // Team insert
    it('Team insert success test', () => {
        const success = () => {
            fixture.insertCharacter(new Character(1, 1));
        };
        expect(success).not.toThrowError();
    });

    it('Team insert fail test', () => {
        const fail = () => {
            fixture.insertCharacter('notacharacter');
        };
        expect(fail).toThrowError(TypeError, 'Not a character');
    });

    it('Team normal insert test', () => {
        fixture.insertCharacter(new Character(1, 1));
        expect(fixture.team.length).toEqual(1);
    });

    it('Team full insert test', () => {
        const success = () => {
            fillUpTeam();
        };
        expect(success).not.toThrowError();
        expect(fixture.team.length).toEqual(MaxTeamLength);
        const fail = () => {
            fixture.insertCharacter(new Character(1, 1));
        };
        expect(fail).toThrowError('Team is full');
    });

    // Team increaseAllInitiative
    it('Team increase all initiative test', () => {
        fillUpTeam();
        fixture.team.forEach(character => {
            expect(character.getInitiative()).toEqual(DefaultInit);
        });
        fixture.increaseAllInitiative();
        for (let i = 0; i < MaxTeamLength; ++i) {
            expect(fixture.team[i].getInitiative()).toEqual(i + 1);
        }
    });

    // Team getNextToAttack
    it('Team get next to attack empty', () => {
        expect(fixture.getNextToAttack()).toEqual(null);
    });

    it('Team get next to attack full team', () => {
        fillUpTeam();
        fixture.increaseAllInitiative();
        const character = fixture.getNextToAttack();
        expect(character.getHealth()).toEqual(MaxTeamLength);
    });
});
