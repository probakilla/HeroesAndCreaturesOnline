import Character from './character/Character';
import Weapon from './Weapon/Weapon';

export function areNumbers() {
    [].forEach.call(arguments, element => {
        if (typeof element !== 'number') {
            throw new TypeError('Not a number');
        }
    });
}

export function isWeapon(weapon) {
    if (!(weapon instanceof Weapon)) {
        throw new TypeError('Not a weapon');
    }
}

export function isCharacter(character) {
    if (!(character instanceof Character)) {
        throw new TypeError('Not a character');
    }
}
