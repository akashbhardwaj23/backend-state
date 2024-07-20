
interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}


export class GameManager {
    games: Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];
    }
    static getInstance () {
       if(GameManager.instance){
           return GameManager.instance;
       }
       GameManager.instance = new GameManager();
       return GameManager.instance; 
    }
    addMove(gameId: string, move: string){
        console.log('Adding move ' + move + ' to game', gameId);
        const game = this.games.find(game => game.id === gameId);
       game?.moves.push(move);
    }

    addGame(gameId : string){
        const game = {
            id : gameId,
            whitePlayerName: 'Alice',
            blackPlayerName: 'Nob',
            moves : []
        }

        this.games.push(game);
    }

    log() {
        console.log('Current games: ', this.games);
    }

}


// export const  gameManager = new GameManager();

export const gameManager = GameManager.getInstance();

// singleton pattern - only one intsance of the gameManager is created and shared across the application
// for this make the constructor private
// and create a static method to get the instance of the class
