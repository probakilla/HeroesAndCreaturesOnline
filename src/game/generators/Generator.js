import Character from '../character/Character';
import Weapon from '../weapon/Weapon'
import Team from '../team/Team';

const MinStat = 1;
const MaxStat = 2;
const MaxWeapon = 40;
const MaxTeamLength = 4;

export function randomCharacterGenerator() {
    let character = new Character(getRandomInteger(MinStat, MaxStat), getRandomInteger(MinStat, MaxStat));
    character.equipWeapon(new Weapon(getRandomInteger(MinStat, MaxWeapon)));
    return character;
}

export function randomTeamGenerator() {
    let team = new Team();
    for (let i = 0; i < MaxTeamLength; ++i) {
        team.insertCharacter(randomCharacterGenerator());
    }
    return team;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max- min) + min);
}