class Fight {
    private team1: Character[];
    private team2: Character[];
    private currentTurn: number;

    constructor(team1: Character[], team2: Character[]) {
        this.team1 = team1;
        this.team2 = team2;
        this.currentTurn = 0;
    }
}