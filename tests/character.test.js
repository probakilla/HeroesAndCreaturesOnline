import Character from '../src/game/character/Character';

it('Character Initilization', () => {
    const testCharacter = new Character(10, 10);
    expect(testCharacter.getAgility()).toEqual(10);
    expect(testCharacter.stats.agility).toEqual(5);
    expect(testCharacter.getHealth()).toEqual(10);
    expect(testCharacter.getInitiative()).toEqual(0);
    expect(testCharacter.getPower()).toEqual(1);
});