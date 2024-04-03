class Character {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    pvmax: number;
    pvcurrent: number;
    isKO: boolean;


    constructor(name :string, attack : number, defense :number, speed : number, pvmax : number, pvcurrent : number){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
        this.isKO = false;
    }

    displayStats() {
        console.log(`Nom: ${this.name}`);
        console.log(`PV actuels: ${this.pvcurrent}`);
        console.log(`Attaque: ${this.attack}`);
        console.log(`Défense: ${this.defense}`);
        console.log(`Vitesse: ${this.speed}`);
    }

    takeDamage(attacker: Character) {
        if (attacker.attack > this.defense) {
            this.pvcurrent -= (attacker.attack - this.defense);
            if (this.pvcurrent < 0) {
                this.pvcurrent = 0;
            }
        }
    }

    attackCharacter(target: Character) {
        target.takeDamage(this);
    }
}


export default Character;