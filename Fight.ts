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
            private menu: Menu;
            private clearScreen: string = "\x1b[2J\x1b[0;0H";
            private monsters: Character[] = [];

            constructor(menu: Menu) {
                this.menu = menu;
            }

            async startCombat(players: Character[], enemies: Character[], menu: Menu) {
                this.resetEnemies(enemies);
                console.log('\nLe combat commence !');
                
                let currentPlayerIndex = 0;
                let currentEnemyIndex = 0;

                while (players.length > 0 && enemies.length > 0) {
                    console.log('\nStatistiques des joueurs :');
                    this.displayCharacterStats(players);
                    console.log('\nStatistiques des ennemis :');
                    this.displayCharacterStats(enemies);

                    const currentPlayer = players[currentPlayerIndex];
                    const currentEnemy = enemies[currentEnemyIndex];

                    const action = await this.chooseAction(currentPlayer);
                    switch (action) {
                        case Action.Attack:
                            const enemyTarget = await menu.chooseTarget(enemies);
                            this.attack(currentPlayer, enemyTarget);
                            if (enemyTarget.pvcurrent <= 0) {
                                console.log(`${enemyTarget.name} a été vaincu !`);
                                enemies.splice(enemies.indexOf(enemyTarget), 1);
                                console.log(this.clearScreen);
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

                    const playerTarget = menu.monsterTurn(players);
                    this.attack(currentEnemy, playerTarget);
                    if (playerTarget.pvcurrent <= 0) {
                        console.log(`\x1b[31m${playerTarget.name} a été vaincu !\x1b[0m`);
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

            private resetEnemies(enemies: Character[]): void {
                enemies.forEach(enemy => {
                    enemy.pvcurrent = enemy.pvmax;
                });
            }

            private displayCharacterStats(characters: Character[]): void {
                characters.forEach(character => {
                    console.log(`Nom: ${character.name}, PV actuels: ${character.pvcurrent}, PV max: ${character.pvmax}`);
                });
            }

            private chooseAction(player: Character, target: Character): Action {
                let choice;
                do {
                    choice = readlineSync.questionInt(`\n\x1b[34m${player.name}, que souhaitez-vous faire ? (1-Attaquer, 2-Pouvoir spécial, 3-Item) :\x1b[0m `);
                } while (choice !== 1 && choice !== 2 && choice !== 3);

                switch (choice) {
                    case 1:
                        return Action.Attack;
                    case 2:
                        if (target) {
                            player.specialAttack(target);
                        } else {
                            console.log("Aucune cible définie pour l'attaque spéciale.");
                        }
                        return Action.SpecialPower;
                    case 3:
                        this.GameManage.useItem(player);
                        return Action.Item;
                }
            }

            private attack(attacker: Character, target: Character) {
                if (!target) {
                    console.log("La cible de l'attaque est invalide.");
                    return;
                }
            
                console.log(`\n\x1b[31m${attacker.name} attaque ${target.name} !\x1b[0m`);
                const damage = Math.max(attacker.attack - target.defense, 0);
                target.pvcurrent -= damage;
                console.log(`\x1b[31m${target.name} perd ${damage} points de vie.\x1b[0m`);
            }

            private resetMonsterHealth(): void {
                this.monsters.forEach(monster => {
                    monster.pvcurrent = monster.pvmax;
                });
            }
        }

export default Fight;