class Weapon {
    constructor(power) {
        this.power = power;
    }

    attack = () => {
        return this.power;
    }
}

export default Weapon;