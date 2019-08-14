import { getRandomInteger } from '../../game/generators/Generator';

const ImgList = ['warrior.png', 'archer.png', 'wizzard.png', 'rogue.png', 'paladin.png'];
const ImgPath = process.env.PUBLIC_URL + '/images/';
const RipImg = 'rip.png';
const DamagesImg = 'dmg.png';

class ImageManager {
    getRandomCharacterImg() {
        let randomChoice = getRandomInteger(0, ImgList.length);
        return ImgPath + ImgList[randomChoice];
    }

    getRipImg() {
        return ImgPath + RipImg;
    }

    getDmgImg() {
        return ImgPath + DamagesImg;
    }
}

const singleton = new ImageManager();
Object.freeze(singleton);
export default singleton;
