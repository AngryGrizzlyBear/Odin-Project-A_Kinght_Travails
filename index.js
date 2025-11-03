const knightMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2]
];

function isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && yy < 8;
}