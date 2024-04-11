class Character {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    pvmax: number;
    pvcurrent: number;
    isKO: boolean;
    inventory: string[];
    
    constructor(name: string, attack: number, defense: number, speed: number, pvmax: number, pvcurrent: number, isKO: boolean) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
        this.isKO = false;
        this.inventory = [];
    }

    public takeDamage(attacker: Character) {
        const damage = Math.max(attacker.attack - this.defense, 0);
        this.pvcurrent -= damage;
        console.log(`${this.name} loses ${damage} HP.`);
    }

    public attackCharacter(target: Character) {
        console.log(`${this.name} attacks ${target.name}!`);
        target.takeDamage(this);
    }

    public defend() {
        const damageReduction = Math.floor(this.defense / 2);
        console.log(`${this.name} defends and reduces damage by ${damageReduction}.`);
        return damageReduction;
    }

    public useItem(itemIndex: number): void {
        if (itemIndex < 0 || itemIndex >= this.inventory.length) {
            console.log('Invalid item index.');
            return;
        }

        let item = this.inventory[itemIndex];
        console.log(`${this.name} uses ${item}.`);
        this.inventory.splice(itemIndex, 1);
    }

    public heal(amount: number): void {
        this.pvcurrent += amount;
        if (this.pvcurrent > this.pvmax) {
            this.pvcurrent = this.pvmax;
        }
        console.log(`${this.name} has been healed by ${amount} HP. Current health is ${this.pvcurrent}.`);
    }

    public isDead(): boolean {
        return this.pvcurrent <= 0;
    }

    public revive(amount: number): void {
        if (this.isDead()) {
            this.pvcurrent = amount;
            console.log(`${this.name} has been revived with ${amount} HP.`);
        } else {
            console.log(`${this.name} is not dead and cannot be revived.`);
        }
    }

    public addItem(item: string): void {
        this.inventory.push(item);
        console.log(`${this.name} added ${item} to their inventory.`);
    }    
}

export default Character;
