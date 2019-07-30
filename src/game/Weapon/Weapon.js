class Weapon {
    constructor(power) {
        this.power = power;
        this.attack.bind(this);
    }

    attack() {
        return this.power;
    }
}

export default Weapon;