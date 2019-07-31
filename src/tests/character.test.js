import Character from '../game/character/Character';
import Weapon from '../game/Weapon/Weapon';

const DefaultStat = 10;
const DefaultInitiative = 0;
const DefaultPower = 1;
const BlockAmount = 5;
const OverkillAttack = 100;
const MinimumHealth = 0;
const OverkillAgility = 2500;
const MaximumInitiative = 2000;

describe('Character tests', () => {
    let fixture;

    beforeEach(() => {
        fixture = new Character(DefaultStat, DefaultStat);
    });

    afterEach(() => {
        fixture = null;
    });

    it('Character initilization test', () => {
        expect(fixture.getAgility()).toEqual(DefaultStat);
        expect(fixture.getHealth()).toEqual(DefaultStat);
        expect(fixture.getMaxHealth()).toEqual(DefaultStat);
        expect(fixture.getInitiative()).toEqual(0);
        expect(fixture.getPower()).toEqual(1);
    });

    it('Character initialization type check test', () => {
        let typeErrorInitialization = () => {
            new Character('nan', 'nan');
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

    it('Character equip weapon type check test success', () => {
        const errorFunction = () => {
            const testWeapon = new Weapon(DefaultStat);
            fixture.equipWeapon(testWeapon);
        };
        expect(errorFunction).not.toThrowError();
    });

    it('Character equip weapon test', () => {
        expect(fixture.getPower()).toEqual(DefaultPower);
        const testWeapon = new Weapon(DefaultStat);
        expect(testWeapon instanceof Weapon).toEqual(true);
        fixture.equipWeapon(testWeapon);
        expect(fixture.getPower()).toEqual(testWeapon.attack());
    });

    it('Character unequip weapon test', () => {
        const testWeapon = new Weapon(DefaultStat);
        expect(fixture.getPower()).toEqual(DefaultPower);
        fixture.equipWeapon(testWeapon);
        expect(fixture.getPower()).toEqual(testWeapon.attack());
        fixture.unequipWeapon();
        expect(fixture.getPower()).toEqual(DefaultPower);
    });

    it('Character increase initiative test', () => {
        expect(fixture.getInitiative()).toEqual(DefaultInitiative);
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(DefaultStat);
    });

    it('Charaget increase initiative overkill test', () => {
        fixture.stats.agility = OverkillAgility;
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(MaximumInitiative);
    });

    it('Character reset initiative after attack test', () => {
        fixture.increaseInitiative();
        expect(fixture.getInitiative()).toEqual(DefaultStat);
        fixture.attack();
        expect(fixture.getInitiative()).toEqual(DefaultInitiative);
    });

    it('Character attack test', () => {
        expect(fixture.attack()).toEqual(DefaultPower);
        fixture.equipWeapon(new Weapon(DefaultStat));
        expect(fixture.attack()).toEqual(DefaultStat);
    });

    it('Character block type check test', () => {
        const throwFunction = () => {
            const character = new Character(DefaultStat, DefaultStat);
            character.block('nan');
        };
        expect(throwFunction).toThrowError(TypeError, 'Not a number');
    });

    it('Character block test', () => {
        fixture.block(BlockAmount);
        expect(fixture.getHealth()).toEqual(BlockAmount);
        expect(fixture.getMaxHealth()).toEqual(DefaultStat);
    });

    it('Character overkill test', () => {
        fixture.block(OverkillAttack);
        expect(fixture.getHealth()).toEqual(MinimumHealth);
        expect(fixture.getMaxHealth()).toEqual(DefaultStat);
    });

    it('Character toString test', () => {
        const str = 'Health: 10 Agility: 10 Weapon: 1';
        expect(fixture.toString()).toEqual(str);
    });

    it('Character isDead test', () => {
        expect(fixture.isDead()).toEqual(false);
        fixture.block(DefaultStat);
        expect(fixture.isDead()).toEqual(true);
    });
});
