import Character from '../Character.ts';

export default class Barbare extends Character {
    constructor() {
        super("Barbare", 100, 20, 5, 80, 80);
    }

    attaqueBerserk(adversaires: Character[]): void {
        if (adversaires.length === 0) {
            console.log("Aucun ennemi à attaquer !");
            return;
        }

        const randomIndex = Math.floor(Math.random() * adversaires.length);
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