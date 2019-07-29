import CharacterConsts from './CharacterConsts.js'

class CharacterStats {
    constructor(health, agility) {
        this.maxHealth = health;
        this.health = health;
        this.agility = agility;
        this.initiative = CharacterConsts.DefaultInitative;
    }
}

export default CharacterStats;