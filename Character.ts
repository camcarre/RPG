class Character {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    pvmax: number;
    pvcurrent: number;
    isKO: boolean;

    constructor(name: string, attack: number, defense: number, speed: number, pvmax: number, pvcurrent: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
        this.isKO = false;
    }

    takeDamage(attacker: Character) {
        const damage = Math.max(attacker.attack - this.defense, 0);
        this.pvcurrent -= damage;
        console.log(`${this.name} perd ${damage} points de vie.`);
    }

    attackCharacter(target: Character) {
        console.log(`${this.name} attaque ${target.name} !`);
        target.takeDamage(this);
    }

    defend() {
        const damageReduction = Math.floor(this.defense / 2);
        console.log(`${this.name} se défend et réduit les dégâts de ${damageReduction}.`);
        return damageReduction;
    }
}

export default Character;

