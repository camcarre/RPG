class Character {
    name: string;
    attack: number;
    defense: number;
    speed: number;
    pvmax: number;
    pvcurrent: number;
    isKO: boolean;
    inventory: string[];
    
    

    constructor(name: string, attack: number, defense: number, speed: number, pvmax: number, pvcurrent: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent = pvcurrent;
        this.isKO = false;
        this.inventory = [];
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

    public useItem(itemIndex: number): void {
        if (itemIndex < 0 || itemIndex >= this.inventory.length) {
            console.log('Indice d\'item invalide.');
            return;
        }

        let item = this.inventory[itemIndex];
        console.log(`${this.name} utilise ${item}.`);
        this.inventory.splice(itemIndex, 1);
    }


    public heal(amount: number): void {
        this.pvcurrent += amount;
        if (this.pvcurrent > this.pvmax) {
            this.pvcurrent = this.pvmax;
        }
        console.log(`${this.name} a été soigné de ${amount} points de vie. Sa santé actuelle est de ${this.currentHealth}.`);
    }

    public mort(): boolean {
        return this.pvcurrent <= 0;
    }

    public revive(amount: number): void {
        if (this.mort()) {
            this.pvcurrent = amount;
            console.log(`${this.name} a été ressuscité avec ${amount} points de vie.`);
        } else {
            console.log(`${this.name} n'est pas K.O. et ne peut pas être ressuscité.`);
        }
    }

    public addItem(item: Item): void {
        this.inventory.push(item);
        console.log(`${this.name} a ajouté ${item.name} à son inventaire.`);
    }

    
}

export default Character;