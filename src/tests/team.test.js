import Team from '../game/team/Team';
import Character from '../game/character/Character';

const MaxTeamLength = 4;

describe('Team tests', () => {
    let fixture;

    beforeEach(() => {
        fixture = new Team();
    });

    afterEach(() => {
        fixture = null;
    });

    it('Team initialization test', () => {
        expect(Array.isArray(fixture.team)).toEqual(true);
    });

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
            for (let i = 0; i < MaxTeamLength; ++i) {
                fixture.insertCharacter(new Character(i + 1, i + 1));
            }
        }
        expect(success).not.toThrowError();
        expect(fixture.team.length).toEqual(MaxTeamLength);
        const fail = () => {
            fixture.insertCharacter(new Character(1, 1));
        };
        expect(fail).toThrowError('Team is full');
    });
});
