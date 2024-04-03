import Character from './Character.ts';
import gameManager from './GameManager.ts';
import { getSelectedCharacters } from './Menu.ts';

class Fight {


    private team1: Character[];
    private team2: Character[];

    constructor() {
        this.team1 = [];
        this.team2 = [];
    }

    fillTeams(selectedCharacters: Character[]) {
        this.team1 = selectedCharacters;
        this.team2 = gameManager.exportSelectedEnemies();
    }

    calculateDamage(attacker: Character, target: Character): number {
        let damage = attacker.attack - target.defense;
        if (damage < 0) {
            damage = 0;
        }
        target.pvcurrent -= damage;
        if (target.pvcurrent <= 0) {
            target.pvcurrent = 0;
            target.isKO = true;
        }
        return damage;
    }

    async startCombat(selectedCharacters: Character[], enemies: Character[]) {
        this.team1 = selectedCharacters;
        this.team2 = enemies;

        console.log("Le combat commence !");

        while (this.areTeamsAlive()) {
            await this.takeTurns();
        }

        if (this.team1.length === 0) {
            console.log("L'équipe 2 a remporté la victoire !");
        } else {
            console.log("L'équipe 1 a remporté la victoire !");
        }
    }

    private areTeamsAlive(): boolean {
        return this.team1.length > 0 && this.team2.length > 0;
    }

    private async takeTurns() {
        this.team1.sort((a, b) => b.speed - a.speed);
        this.team2.sort((a, b) => b.speed - a.speed);

        for (const character of this.team1) {
            if (this.team2.length === 0) break;
            await this.attack(character, this.team2);
        }

        for (const character of this.team2) {
            if (this.team1.length === 0) break;
            await this.attack(character, this.team1);
        }
    }

    private async attack(attacker: Character, targets: Character[]) {
        const target = targets[0]; 

        console.log(`${attacker.name} attaque ${target.name} !`);

        if (target.pvcurrent <= 0) {
            console.log(`${target.name} est K.O.`);
            targets.splice(0, 1);
        }
    }
}

export default Fight;