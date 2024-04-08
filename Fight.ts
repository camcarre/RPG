import Character from './Character.ts';
import gameManager from './GameManager.ts';
import { getSelectedCharacters } from './Menu.ts';


enum Action {
    Attack = 'Attaquer',
    Defend = 'Se Défendre'
}

class Fight {
    async startCombat(players: Character[], enemies: Character[]) {
        console.log('Le combat commence !');

        while (players.length > 0 && enemies.length > 0) {
            for (let i = 0; i < players.length; i++) {
                const player = players[i];
                const action = await this.chooseAction(player);

                switch (action) {
                    case Action.Attack:
                        const enemyTarget = await this.chooseTarget(enemies);
                        this.attack(player, enemyTarget);
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
                        player.defend();
                        break;
                }
            }

            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i];
                const playerTarget = this.chooseTarget(players);
                this.attack(enemy, playerTarget);
                if (playerTarget.pvcurrent <= 0) {
                    console.log(`${playerTarget.name} a été vaincu !`);
                    players.splice(players.indexOf(playerTarget), 1);
                }
                if (players.length === 0) {
                    console.log('Tous vos personnages ont été vaincus. Vous avez perdu...');
                    return;
                }
            }
        }
    }

    private async chooseAction(player: Character): Promise<Action> {
        let choice;
        do {
            choice = prompt(`${player.name}, que souhaitez-vous faire ? (${Action.Attack} / ${Action.Defend}) : `);
        } while (![Action.Attack, Action.Defend].includes(choice));
        return choice as Action;
    }

    private async chooseTarget(targets: Character[]): Promise<Character> {
        let choice;
        do {
            const targetIndex = Number(prompt(`Choisissez une cible en entrant l'indice (1-${targets.length}): `)) - 1;
            choice = targets[targetIndex];
        } while (!choice);
        return choice;
    }

    private attack(attacker: Character, target: Character) {
        console.log(`${attacker.name} attaque ${target.name} !`);
        const damage = Math.max(attacker.attack - target.defense, 0);
        target.pvcurrent -= damage;
        console.log(`${target.name} perd ${damage} points de vie.`);
    }

    private enemyTurn(enemy: Character, players: Character[]) {
        if (Math.random() < 0.2) {
            let lowestHealthPlayer = players[0];
            for (let i = 1; i < players.length; i++) {
                if (players[i].pvcurrent < lowestHealthPlayer.pvcurrent) {
                    lowestHealthPlayer = players[i];
                }
            }
            this.attack(enemy, lowestHealthPlayer);
        } else {
            const randomPlayer = players[Math.floor(Math.random() * players.length)];
            this.attack(enemy, randomPlayer);
        }
    }
}

export default Fight;
















