import CharacterConsts from './CharacterConsts';
import CharacterStats from './CharacterStats';
import { areNumbers, isWeapon } from '../TypeChecker';

class Character {
    constructor(health, agility) {
        areNumbers(health, agility);
        this.stats = new CharacterStats(health, agility);
        this.weapon = null;
    }

    getMaxHealth = () => {
        return this.stats.maxHealth;
    }

    getHealth = () => {
        return this.stats.health;
    }

    getAgility= () => {
        return this.stats.agility;
    }

    getInitiative = () => {
        return this.stats.initiative;
    }

    getPower = () => {
        if (!this.weapon) {
            return CharacterConsts.DefaultPower;
        } else {
            return this.weapon.attack();
        }
    }

    equipWeapon = weapon => {
        isWeapon(weapon);
        this.weapon = weapon;
    }

    unequipWeapon = () => {
        this.weapon = null;
    }

    attack = () => {
        this.resetInitiative();
        if (this.hasAWeapon()) {
            return this.weapon.attack();
        }
        return CharacterConsts.DefaultPower;
    }

    resetInitiative = () => {
        this.stats.initiative = CharacterConsts.DefaultInitative;
    }

    hasAWeapon = () => {
        return this.weapon !== null;
    }

    block = amount => {
        areNumbers(amount);
        this.stats.health -= amount;
        if (this.stats.health < CharacterConsts.MinimumHealth) {
            this.stats.health = CharacterConsts.MinimumHealth;
        }
    }

    isDead = () => {
        return this.stats.health <= CharacterConsts.MinimumHealth;
    }

    increaseInitiative() {
        this.stats.initiative += this.stats.agility;
        if (this.stats.initiative > CharacterConsts.MaximumInitiative) {
            this.stats.initiative = CharacterConsts.MaximumInitiative;
        }
    }

    toString = () => {
        let charString = 'Health: ' + this.stats.health;
        charString += ' Weapon: ' + this.getPower();
        charString += ' Init: ' + this.stats.initiative;
        return charString;
    }
}

export default Character;
