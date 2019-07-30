import Character from '../game/character/Character';
import Weapon from '../game/Weapon/Weapon';
import CharacterConsts from './TestConsts';

it('Character Initilization Test', () => {
    const testCharacter = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
    expect(testCharacter.getAgility()).toEqual(CharacterConsts.DefaultStat);
    expect(testCharacter.stats.agility).toEqual(6);
    expect(testCharacter.getHealth()).toEqual(CharacterConsts.DefaultStat);
    expect(testCharacter.getMaxHealth()).toEqual(CharacterConsts.DefaultStat);
    expect(testCharacter.getInitiative()).toEqual(0);
    expect(testCharacter.getPower()).toEqual(1);
});

it('Character Equip Weapon Test', () => {
    const testCharacter = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
    const testWeapon = new Weapon(CharacterConsts.DefaultStat);
    expect(testCharacter.getPower()).toEqual(CharacterConsts.DefaultPower);
    testCharacter.equipWeapon(testWeapon);
    expect(testCharacter.getPower()).toEqual(testWeapon.attack());
});

it('Character Unequip Weapon Test', () => {
    const testCharacter = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
    const testWeapon = new Weapon(CharacterConsts.DefaultStat);
    expect(testCharacter.getPower()).toEqual(CharacterConsts.DefaultPower);
    testCharacter.equipWeapon(testWeapon);
    expect(testCharacter.getPower()).toEqual(testWeapon.attack());
    testCharacter.unequipWeapon();
    expect(testCharacter.getPower()).toEqual(CharacterConsts.DefaultPower);
});