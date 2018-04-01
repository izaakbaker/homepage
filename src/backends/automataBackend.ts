export class AutomataBackend {
    private boardWidth: number;
    private boardHeight: number;

    public initialize(boardWidth: number, boardHeight: number): boolean {
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        return true;
    }
}