import Character from './Character.ts';
import * as readlineSync from 'readline-sync';

export default class Menu {
    private characters: Character[] = [];

    constructor(characters: Character[]) {
        this.characters = characters;
    }

    chooseTarget(targets: Character[]): Character {
        console.log("\n\x1b[34mChoisissez la cible :\x1b[0m");
        targets.forEach((target, index) => {
            console.log(`${index + 1}. ${target.name}`);
            console.log(`  - PV Current: \x1b[32m${target.pvcurrent}\x1b[0m`);
        });

        let choice;
        do {
            const targetIndex = readlineSync.questionInt(`\n\x1b[34mChoisissez une cible en entrant l'indice (1-${targets.length}): \x1b[0m`) - 1;
            choice = targets[targetIndex];
            if (!choice) {
                console.log("Cible invalide. Veuillez choisir à nouveau.");
            }
        } while (!choice);
        return choice;
    }

    monsterTurn(targets: Character[]): Character {
        console.log("\n\x1b[34mLe monstre choisit une cible :\x1b[0m");
    
        const targetIndex = Math.floor(Math.random() * targets.length);
    
        const choice = targets[targetIndex];
    
        console.log(`Le monstre a choisi : ${choice.name}`);
        return choice;
    }

    async chooseItemAction(): Promise<Action> {
        console.log('\x1b[34mChoisissez l\'action à effectuer :\x1b[0m');
        console.log('1. Potion: Restitue 50% des PV d\'un personnage.');
        console.log('2. Morceau d\'étoile: Ressuscite un personnage avec 20% de ses PV (ou soigne 50% de ses PV s\'il n\'est pas K.O.).');
        console.log('3. Demi-étoile: Ressuscite un personnage avec tous ses PV (ou le soigne entièrement s\'il n\'est pas K.O.).');
        console.log('4. Ether: Restitue 30% des Points de Magie.');

        let choice;
        do {
            choice = Number(prompt('\x1b[34mChoisissez une action en entrant le numéro correspondant :\x1b[0m'));
        } while (choice < 1 || choice > 4);

        return choice;
    }
}











