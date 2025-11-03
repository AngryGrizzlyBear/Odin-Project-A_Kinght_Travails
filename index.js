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

function knightMoves(start, end) {
    if (start[0] === end[0] && start[1] === end[1]) {
        return [start];
    }

    const queue = [[start]];

    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();

        const currentPosition = path[path.length - 1]

        const validMoves = getValidMoves(currentPosition);

        for (const nextPosition of validMoves) {
            if (nextPosition[0] === end[0] && nextPosition[1] === end[1]) {
                return [...path, nextPosition];
            }
            const positionKey = nextPosition.toString();
            if (!visited.has(positionKey)) {
                visited.add(positionKey);

                queue.push([...path, nextPosition]);
            }
        }

    }
    return null;
}