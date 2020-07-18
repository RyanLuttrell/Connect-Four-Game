class Game {
    constructor() {
        this.board = board;
        this.players = createPlayers();
        this.ready = false;
    }

    /** 
    * Creates two player objects
    * @return  {Array}    An array of two Player objects.
    */

    createPlayers() {
        const players = [
            new Player('Ryan', 1, '#e15258', true),
            new Player('Victoria', 2, '#e59a13')
        ];
        return players
    }
}