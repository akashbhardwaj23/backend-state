"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(gameId, move) {
        console.log('Adding move ' + move + ' to game', gameId);
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'Alice',
            blackPlayerName: 'Nob',
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log('Current games: ', this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
