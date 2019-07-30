import CharacterConsts from './CharacterConsts'
import CharacterStats from './CharacterStats'
import Weapon from '../Weapon/Weapon'

class Character {
    constructor(health, agility) {
        this.stats = new CharacterStats(health, agility);
        this.weapon = null;
        this.equipWeapon.bind(this);
        this.getPower.bind(this);
    }

    getMaxHealth() {
        return this.stats.maxHealth;
    }

    getHealth() {
        return this.stats.health;
    }

    getAgility() {
        return this.stats.agility;
    }

    getInitiative() {
        return this.stats.initiative;
    }

    getPower() {
        if (!this.weapon) {
            return CharacterConsts.DefaultPower;
        } else {
            return this.weapon.attack();
        }
    }

    equipWeapon(weapon) {
        this.checkWeapon(weapon);
        this.weapon = weapon;
    }

    checkWeapon(weapon) {
        if (!weapon instanceof Weapon) {
            throw new Error('Not a weapon');
        }
    }

    unequipWeapon() {
        this.weapon = null;
    }

    attack() {
        this.resetInitiative();
        if (this.hasAWeapon()) {
            return that.weapon.attack();
        }
        return CharacterConsts.DefaultPower;
    }

    resetInitiative() {
        this.stats.initiative = CharacterConsts.DefaultInitative;
    }

    hasAWeapon() {
        return this.weapon !== null;
    }

    block(amount) {
        this.stats.health -= amount;
        if (this.stats.health < CharacterConsts.MinimumHealth) {
            this.stats.health = CharacterConsts.MinimumHealth;
        }
    }

    isDead() {
        return this.stats.health <= CharacterConsts.MinimumHealth;
    }

    increaseInitiative() {
        this.stats.initiative += this.stats.agility;
        if (this.statis.initiative > CharacterConsts.MaximumInitiative) {
            this.stats.initiative = CharacterConsts.MaximumInitiative;
        }
    }

    toString() {
        let charString = "Health: " + this.stats.health;
        charString += " Agility: " + this.stats.agility;
        charString += " Weapon: " + this.getPower();
        return charString;
    }
}

export default Character;