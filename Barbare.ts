class Barbare{
    name: string = "Barbare";
    attack: number = 100;
    defense: number = 20;
    speed: number = 5;
    pvmax: number = 80;
    pvcurrent: number = 80;

    constructor (name : string, attack : number, defense : number, speed : number, pvmax : number, pvcurrent : number, hurt : number){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.pvmax = pvmax;
        this.pvcurrent;
    }

    attaqueBerserk(adversaires: any[]): void {
        if (adversaires.length === 0) {
            console.log("Aucun ennemi à attaquer !");
            return;
        }

        const randomIndex = Math.floor(Math.random() * adversaires.length); // Sélectionner un ennemi au hasard
        const ennemi = adversaires[randomIndex];

        const degats = Math.max(0, (this.attack - ennemi.defense) * 1.3);
        ennemi.pvcurrent = Math.max(0, ennemi.pvcurrent - degats);

        const selfDamage = 0.2 * this.pvmax;
        this.pvcurrent = Math.max(0, this.pvcurrent - selfDamage);

        console.log(`${this.name} lance une attaque berserk sur ${ennemi.name} !`);
        console.log(`${ennemi.name} subit ${degats} dégâts.`);
        console.log(`${this.name} se blesse de ${selfDamage} dégâts.`);
    }
} 
export default Barbare;