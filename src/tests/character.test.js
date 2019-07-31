import Character from '../game/character/Character';
import Weapon from '../game/Weapon/Weapon';
import CharacterConsts from './TestConsts';

describe('Character tests', () => {
    let fixture;

    beforeEach(() => {
        fixture = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
    });

    afterEach(() => {
        fixture = null;
    });

    it('Character initilization test', () => {
        expect(fixture.getAgility()).toEqual(CharacterConsts.DefaultStat);
        expect(fixture.getHealth()).toEqual(CharacterConsts.DefaultStat);
        expect(fixture.getMaxHealth()).toEqual(CharacterConsts.DefaultStat);
        expect(fixture.getInitiative()).toEqual(0);
        expect(fixture.getPower()).toEqual(1);
    });

    it('Character initialization type check test', () => {
        let typeErrorInitialization = () => {
            new Character('nan', 'nan')
        };
        expect(typeErrorInitialization).toThrowError(TypeError, 'Not a number');
        typeErrorInitialization = () => {
            new Character({ num: 1 }, 2);
        };
        expect(typeErrorInitialization).toThrowError(TypeError, 'Not a number');
    });

    it('Character equip weapon type check test fail', () => {
        const errorFunction = () => {
            fixture.equipWeapon('Notaweapon');
        };
        expect(errorFunction).toThrowError(TypeError, 'Not a weapon');
    });

    it ('Character equip weapon type check test success', () => {
        const errorFunction = () => {
            const testWeapon = new Weapon(CharacterConsts.DefaultStat);
            fixture.equipWeapon(testWeapon);
        }
        expect(errorFunction).not.toThrowError();
    })

    it('Character equip weapon test', () => {
        expect(fixture.getPower()).toEqual(CharacterConsts.DefaultPower);
        const testWeapon = new Weapon(CharacterConsts.DefaultStat);
        expect(testWeapon instanceof Weapon).toEqual(true);
        fixture.equipWeapon(testWeapon);
        expect(fixture.getPower()).toEqual(testWeapon.attack());
    });

    it('Character unequip weapon test', () => {
        const testWeapon = new Weapon(CharacterConsts.DefaultStat);
        expect(fixture.getPower()).toEqual(CharacterConsts.DefaultPower);
        fixture.equipWeapon(testWeapon);
        expect(fixture.getPower()).toEqual(testWeapon.attack());
        fixture.unequipWeapon();
        expect(fixture.getPower()).toEqual(CharacterConsts.DefaultPower);
    });

    it('Character increase initiative test', () => {
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultInitiative);
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultStat);
    });

    it('Charaget increase initiative overkill test', () => {
        fixture.stats.agility = CharacterConsts.OverkillAgility;
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.MaximumInitiative);
    })

    it('Character reset initiative after attack test', () => {
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultStat);
        fixture.attack();
        expect(fixture.getInitiative()).toEqual(CharacterConsts.DefaultInitiative);
    });

    it('Character attack test', () => {
        expect(fixture.attack()).toEqual(CharacterConsts.DefaultPower);
        fixture.equipWeapon(new Weapon(CharacterConsts.DefaultStat));
        expect(fixture.attack()).toEqual(CharacterConsts.DefaultStat);
    });

    it('Character block type check test', () => {
        const throwFunction = () => {
            const character = new Character(CharacterConsts.DefaultStat, CharacterConsts.DefaultStat);
            character.block('nan');
        };
        expect(throwFunction).toThrowError(TypeError, 'Not a number');
    });

    it('Character block test', () => {
        fixture.block(CharacterConsts.BlockAmount);
        expect(fixture.getHealth()).toEqual(CharacterConsts.BlockAmount);
        expect(fixture.getMaxHealth()).toEqual(CharacterConsts.DefaultStat);
    });

    it('Character overkill test', () => {
        fixture.block(CharacterConsts.Overkill);
        expect(fixture.getHealth()).toEqual(CharacterConsts.MinimumHealth);
        expect(fixture.getMaxHealth()).toEqual(CharacterConsts.DefaultStat);
    })

    it('Character toString test', () => {
        const str = "Health: 10 Agility: 10 Weapon: 1";
        expect(fixture.toString()).toEqual(str);
    })

    it('Character isDead test', () => {
        expect(fixture.isDead()).toEqual(false);
        fixture.block(CharacterConsts.DefaultStat);
        expect(fixture.isDead()).toEqual(true);
    })
});
