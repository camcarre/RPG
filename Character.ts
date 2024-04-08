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
}

export default Character;