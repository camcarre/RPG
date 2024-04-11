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
                console.log('\nCombat begins!');
        
                let currentPlayerIndex = 0;
                let currentEnemyIndex = 0;
        
                while (players.length > 0 && enemies.length > 0) {
                    console.log('\x1b[32m%s\x1b[0m', '\nPlayer statistics:'); // Green
                    this.displayCharacterStats(players);
                    console.log('\x1b[31m%s\x1b[0m', '\nEnemy statistics:'); // Red
                    this.displayCharacterStats(enemies);
        
                    const currentPlayer = players[currentPlayerIndex];
                    const currentEnemy = enemies[currentEnemyIndex];
        
                    const action = await this.chooseAction(currentPlayer);
                    switch (action) {
                        case Action.Attack:
                            const enemyTarget = await menu.chooseTarget(enemies);
                            this.attack(currentPlayer, enemyTarget);
                            if (enemyTarget.pvcurrent <= 0) {
                                console.log(`${enemyTarget.name} has been defeated!`);
                                enemies.splice(enemies.indexOf(enemyTarget), 1);
                                console.log(this.clearScreen);
                            }
                            if (enemies.length === 0) {
                                console.log('The enemies have been defeated. You win!');
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
                        console.log(`\x1b[31m${playerTarget.name} has been defeated!\x1b[0m`);
                        players.splice(players.indexOf(playerTarget), 1);
                    }
                    if (players.length === 0) {
                        console.log('All your characters have been defeated. You lose...');
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
                    const status = character.isKO ? 'Dead' : 'Alive';
                    console.log(`Name: ${character.name}, Attack: ${character.attack}, Defense: ${character.defense}, Speed: ${character.speed}, Current HP: ${character.pvcurrent}, Max HP: ${character.pvmax}, Status: ${status}`);
                });
            }
        
            private chooseAction(player: Character, target: Character): Action {
                let choice;
                do {
                    choice = readlineSync.questionInt(`\n\x1b[34m${player.name}, what would you like to do? (1-Attack, 2-Special Power, 3-Item): \x1b[0m`);
                } while (choice !== 1 && choice !== 2 && choice !== 3);
        
                switch (choice) {
                    case 1:
                        return Action.Attack;
                    case 2:
                        if (target) {
                            player.specialAttack(target);
                        } else {
                            console.log("No target defined for special attack.");
                        }
                        return Action.SpecialPower;
                    case 3:
                        this.GameManage.useItem(player);
                        return Action.Item;
                }
            }
        
            private attack(attacker: Character, target: Character) {
                if (!target) {
                    console.log("Invalid attack target.");
                    return;
                }
        
                console.log(`\n\x1b[31m${attacker.name} attacks ${target.name}!\x1b[0m`);
                const damage = Math.max(attacker.attack - target.defense, 0);
                target.pvcurrent -= damage;
                console.log(`\x1b[31m${target.name} loses ${damage} HP.\x1b[0m`);
            }
        
            private resetMonsterHealth(): void {
                this.monsters.forEach(monster => {
                    monster.pvcurrent = monster.pvmax;
                });
            }
        }
        
        export default Fight;
        






















