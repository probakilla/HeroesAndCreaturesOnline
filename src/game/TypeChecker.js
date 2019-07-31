import Character from './character/Character';
import Weapon from './weapon/Weapon';
import Team from './team/Team';

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

export function isTeam(team) {
    if (!(team instanceof Team)){
        throw new TypeError('Not a team');
    }
}
