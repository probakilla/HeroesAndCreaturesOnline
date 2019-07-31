import Character from '../game/character/Character';
import Weapon from '../game/Weapon/Weapon';
import CharacterConsts from './TestConsts';

describe('Character Tests', () => {
    let fixture;

    beforeEach(() => {
        fixture = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
    });

    afterEach(() => {
        fixture = null;
    });

    it('Character Initilization Test', () => {
        expect(fixture.getAgility()).toEqual(CharacterConsts.DefaultStat);
        expect(fixture.getHealth()).toEqual(CharacterConsts.DefaultStat);
        expect(fixture.getMaxHealth()).toEqual(CharacterConsts.DefaultStat);
        expect(fixture.getInitiative()).toEqual(0);
        expect(fixture.getPower()).toEqual(1);
    });

    it('Character Initialization Type Check Test', () => {
        let typeErrorInitialization = () => {
            new Character('nan', 'nan');
        };
        expect(typeErrorInitialization).toThrowError(TypeError, 'Not a number');
        typeErrorInitialization = () => {
            new Character({ num: 1 }, 2);
        };
        expect(typeErrorInitialization).toThrowError(TypeError, 'Not a number');
    });

    it('Character Equip Weapon Type Check Test', () => {
        expect(new Weapon(1) instanceof Weapon).toEqual(1234);
        let errorFunction = () => {
            fixture.equipWeapon('Not a weapon');
        };
        expect(errorFunction).toThrowError(TypeError, 'Not a weapon');
        errorFunction = () => {
            fixture.equipWeapon(new Weapon(CharacterConsts.DefaultPower));
        }
        expect(errorFunction).not.toThrowError(TypeError);
    });

    it('Character Equip Weapon Test', () => {
        expect(fixture.getPower()).toEqual(CharacterConsts.DefaultPower);
        fixture.equipWeapon(new Weapon(CharacterConsts.DefaultStat));
        expect(fixture.getPower()).toEqual(testWeapon.attack());
    });

    it('Character Unequip Weapon Test', () => {
        const testWeapon = new Weapon(CharacterConsts.DefaultStat);
        expect(fixture.getPower()).toEqual(CharacterConsts.DefaultPower);
        fixture.equipWeapon(testWeapon);
        expect(fixture.getPower()).toEqual(testWeapon.attack());
        fixture.unequipWeapon();
        expect(fixture.getPower()).toEqual(CharacterConsts.DefaultPower);
    });

    it('Character Increase Initiative Test', () => {
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultInitiative);
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultStat);
    });

    it('Character Reset Initiative After Attack Test', () => {
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultStat);
        fixture.attack();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultInitiative);
    });

    it('Character Attack Test', () => {
        expect(fixture.attack()).toEqual(CharacterConsts.DefaultPower);
        fixture.equipWeapon(new Weapon(CharacterConsts.DefaultStat));
        expect(fixture.attack()).toEqual(CharacterConsts.DefaultStat);
    });

    it('Character Block Type Check Test', () => {
        const throwFunction = () => {
            const character = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
            character.block('nan');
        };
        expect(throwFunction).toThrowError(TypeError, 'Not a number');
    });

    it('Character Block Test', () => {
        fixture.block(CharacterConsts.BlockAmount);
        expect(fixture.getHealth()).toEqual(CharacterConsts.BlockAmount);
        expect(fixture.getMaxHealth()).toEqual(CharacterConsts.DefaultStat);
    });

    it('Character ToString Test', () => {
        const str = "Health: 10 Agility: 10 Weapon: 1";
        expect(fixture.toString()).toEqual(str);
    })

    it('Character IsDead Test', () => {
        expect(fixture.isDead()).toEqual(false);
        fixture.block(CharacterConsts.DefaultStat);
        expect(fixture.isDead()).toEqual(true);
    })
});
