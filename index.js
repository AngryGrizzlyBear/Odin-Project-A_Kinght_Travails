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

function getValidMoves(position) {
    const [x, y] = position;
    const validMoves = [];

    for (const [dx, dy] of knightMoves) {
        const newX = x + dx;
        const newY = y + dy;

        if (isValidPosition(newX, newY)) {
            validMoves.push([newX, newY]);
        }
    }

    return validMoves;
}