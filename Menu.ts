import Character from './Character.ts';
import * as readlineSync from 'readline-sync';

export default class Menu {
    private characters: Character[] = [];

    constructor(characters: Character[]) {
        this.characters = characters;
    }

    protected chooseTarget(targets: Character[]): Character {
        console.log("\n\x1b[34mChoose the target:\x1b[0m");
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

    protected monsterTurn(targets: Character[]): Character {
        console.log("\n\x1b[34mThe monster chooses a target:\x1b[0m");
    
        const targetIndex = Math.floor(Math.random() * targets.length);
    
        const choice = targets[targetIndex];
    
        console.log(`The monster has chosen: ${choice.name}`);
        return choice;
    }

    protected async chooseItemAction(): Promise<Action> {
        console.log('\x1b[34mChoose the action to perform:\x1b[0m');
        console.log('1. Potion: Restore 50% of a character\'s HP.');
        console.log('2. Star piece: Revive a character with 20% of their HP (or heal 50% of their HP if they are not K.O.).');
        console.log('3. Half-star: Revive a character with all their HP (or heal them completely if they are not K.O.).');
        console.log('4. Ether: Restore 30% of Magic Points.');


        let choice;
        do {
            choice = Number(prompt('\x1b[34mChoisissez une action en entrant le numéro correspondant :\x1b[0m'));
        } while (choice < 1 || choice > 4);

        return choice;
    }
}











