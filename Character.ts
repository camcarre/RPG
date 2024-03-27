class Character {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    pvmax: number;
    pvcurrent: number;


    constructor(name :string, attack : number, defense :number, speed : number, pvmax : number, pvcurrent : number){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }
    isAlive(): boolean {
        return this.pvcurrent > 0;
    }
}

export default Character;