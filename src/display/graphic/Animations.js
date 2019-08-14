import sleep from '../Sleep';
import ImageManager from './ImageManager';
import '../../css/Character.css';

const FadeTime = 1000;
const DmgTime = 200;

class Animations {
    async fadeOutAnimation(element) {
        if (element) {
            if (!element.classList.contains('fade')) {
                element.classList.add('fade');
            }
            await sleep(FadeTime);
            const ripImg = ImageManager.getRipImg();
            element.setAttribute('src', ripImg);
            element.classList.remove('fade');
        }
    }

    async dmgAnimation(element) {
        if (element) {
            const save = element.getAttribute('src');
            const dmgImg = ImageManager.getDmgImg();
            element.setAttribute('src', dmgImg);
            await sleep(DmgTime);
            element.setAttribute('src', save);
        }
    }
}

export default Animations;
