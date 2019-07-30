import Weapon from './Weapon/Weapon'

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
