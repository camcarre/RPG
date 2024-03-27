import Character from './Character.ts';

class Fight {
    team1: Character[];
    team2: Character[];

    constructor(team1: Character[], team2: Character[]) {
        this.team1 = team1;
        this.team2 = team2;
    }

    addCharacterToTeam1(character: Character) {
        this.team1.push(character);
    }

    addCharacterToTeam2(character: Character) {
        this.team2.push(character);
    }

    announceMonsters() {
        console.log("Monstres rencontrés dans l'arène :");
        for (let i = 0; i < this.team2.length; i++) {
            console.log(`${i + 1}. ${this.team2[i].name}`);
        }
        console.log("");
    }

    determineTurnOrder(team: Character[]): Character[] {
        return team.sort((a, b) => b.speed - a.speed);
    }

    startCombat() {
        console.log("Le combat commence !");
        this.announceMonsters();

        let currentTeam = this.team1;
        let opponentTeam = this.team2;

        while (true) {
            const activeTeam = this.determineTurnOrder(currentTeam);
            for (const character of activeTeam) {
                if (character.isAlive()) {
                    console.log(`C'est au tour de ${character.name} d'agir.`);
                }
            }

            if (opponentTeam.every(character => !character.isAlive())) {
                console.log("L'équipe adverse est KO. Victoire !");
                break;
            } else if (currentTeam.every(character => !character.isAlive())) {
                console.log("Votre équipe est KO. Game Over.");
                break;
            }

            [currentTeam, opponentTeam] = [opponentTeam, currentTeam];
        }
    }
}
export default Fight;



