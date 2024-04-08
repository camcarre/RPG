import Character from './Character.ts';
import gameManager from './GameManager.ts';
import Menu from './Menu.ts';
import * as readlineSync from 'readline-sync';

enum Action {
    Attack = 'Attaquer',
    SpecialPower = 'Pouvoir spécial',
    Item = 'Item'
}

class Fight {
    async startCombat(players: Character[], enemies: Character[]) {
        console.log('Le combat commence !');

        let currentPlayerIndex = 0;
        let currentEnemyIndex = 0;

        while (players.length > 0 && enemies.length > 0) {
            const currentPlayer = players[currentPlayerIndex];
            const currentEnemy = enemies[currentEnemyIndex];

            const action = await this.chooseAction(currentPlayer);
            switch (action) {
                case Action.Attack:
                    const enemyTarget = await this.chooseTarget(enemies);
                    this.attack(currentPlayer, enemyTarget);
                    if (enemyTarget.pvcurrent <= 0) {
                        console.log(`${enemyTarget.name} a été vaincu !`);
                        enemies.splice(enemies.indexOf(enemyTarget), 1);
                    }
                    if (enemies.length === 0) {
                        console.log('Les ennemis ont été vaincus. Vous avez gagné !');
                        return;
                    }
                    break;
                case Action.Defend:
                    currentPlayer.defend();
                    break;
            }

            const playerTarget = this.chooseTarget(players);
            this.attack(currentEnemy, playerTarget);
            if (playerTarget.pvcurrent <= 0) {
                console.log(`${playerTarget.name} a été vaincu !`);
                players.splice(players.indexOf(playerTarget), 1);
            }
            if (players.length === 0) {
                console.log('Tous vos personnages ont été vaincus. Vous avez perdu...');
                return;
            }

            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
            currentEnemyIndex = (currentEnemyIndex + 1) % enemies.length;
        }
    }

    private async chooseAction(player: Character): Promise<Action> {
        let choice;
        do {
            console.log(`${player.name}, que souhaitez-vous faire ? (1-Attaquer, 2-Pouvoir spécial, 3-Item) : `);
            choice = Number(prompt());
        } while (choice !== 1 && choice !== 2 && choice !== 3);
        switch (choice) {
            case 1:
                return Action.Attack;
            case 2:
                return Action.SpecialPower;
            case 3:
                return Action.Item;
        }
    }
    

    private async chooseTarget(targets: Character[]): Promise<Character> {
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

    private attack(attacker: Character, target: Character) {
        if (!target) {
            console.log("La cible de l'attaque est invalide.");
            return;
        }
    
        console.log(`${attacker.name} attaque ${target.name} !`);
        const damage = Math.max(attacker.attack - target.defense, 0);
        target.pvcurrent -= damage;
        console.log(`${target.name} perd ${damage} points de vie.`);
    }
}

export default Fight;



















