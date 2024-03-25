class Fight {
    private team1: Character[];
    private team2: Character[];
    private currentTurn: number;

    constructor(team1: Character[], team2: Character[]) {
        this.team1 = team1;
        this.team2 = team2;
        this.currentTurn = 0;
    }

    start() {
        while (!this.isGameOver()) {
            const currentCharacter = this.getCurrentCharacter();
            if (currentCharacter.isAlive()) {
                currentCharacter.takeTurn();
            }
            this.nextTurn();
        }
        this.endGame();
    }

    private getCurrentCharacter(): Character {
        const allCharacters = [...this.team1, ...this.team2];
        const sortedCharacters = allCharacters.sort((a, b) => b.speed - a.speed);
        return sortedCharacters[this.currentTurn % allCharacters.length];
    }

    private nextTurn() {
        this.currentTurn++;
    }

    private isGameOver(): boolean {
        return this.isTeamDefeated(this.team1) || this.isTeamDefeated(this.team2);
    }

    private isTeamDefeated(team: Character[]): boolean {
        return team.every(character => !character.isAlive());
    }

    private endGame() {
        if (this.isTeamDefeated(this.team1)) {
            console.log("L'équipe 2 a gagné !");
        } else {
            console.log("L'équipe 1 a gagné !");
        }
    }
}