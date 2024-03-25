

class Character {
    name ="";
    attack: number;
    defense : number;
    speed: number;
    pvmax: number;
    pvcurrent: number;
    health: number;


    constructor(name :string, attack : number, defense :number, speed : number, pvmax : number, pvcurrent : number , health: number){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
    }

    isAlive(): boolean {
        return this.health > 0;
    }

    takeTurn() {
        
    }

}