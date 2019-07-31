import Weapon from './weapon/Weapon';
import Character from './character/Character';

export function areNumbers() {
    [].forEach.call(arguments, element => {
        if (typeof element !== 'number') {
            throw new TypeError('Not a number');
        }
    });
}

export function areObjects() {
    [].forEach.call(arguments, element => {
        if (typeof element !== 'object') {
            throw new TypeError('Not an object');
        }
    });
}

export function areWeapons() {
    [].forEach.call(arguments, element => {
        if (!(element instanceof Weapon)) {
            throw new TypeError('Not a weapon');
        }
    });
}

export function areCharacters() {
    [].forEach.call(arguments, element => {
        if (!(element instanceof Character)) {
            throw new TypeError('Not a character');
        }
    });
}
