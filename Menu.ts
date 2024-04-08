import Character from './Character.ts';

export default class Menu {
    private characters: Character[] = [];

    constructor(characters: Character[]) {
        this.characters = characters;
    }

    async displayMenu() {
        console.log("Choisissez vos aventuriers :");
        this.characters.forEach((character, index) => {
            console.log(`${index + 1}. ${character.name}`);
            console.log(`  - Attack: ${character.attack}, Defense: ${character.defense}, Speed: ${character.speed}, PV Max: ${character.pvmax}, PV Current: ${character.pvcurrent}`);
        });
    }

    async chooseTarget(targets: Character[]) {
        console.log("Choisissez la cible :");
        targets.forEach((target, index) => {
            console.log(`${index + 1}. ${target.name}`);
            console.log(`  - PV Current: ${target.pvcurrent}`);
        });

        let choice;
        do {
            const targetIndex = Number(prompt(`Choisissez une cible en entrant l'indice (1-${targets.length}): `)) - 1;
            choice = targets[targetIndex];
            if (!choice) {
                console.log("Cible invalide. Veuillez choisir à nouveau.");
            }
        } while (!choice);
        return choice;
    }
}










