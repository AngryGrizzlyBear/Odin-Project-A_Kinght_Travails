const KNIGHT_MOVE_OFFSETS = [
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
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function getValidMoves(position) {
    const [x, y] = position;
    const validMoves = [];

    for (const [dx, dy] of KNIGHT_MOVE_OFFSETS) {
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

function knightMovesWithOutput(start, end) {
    const path = knightMoves(start, end);

    console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach(position => {
    console.log(`  [${position[0]},${position[1]}]`);
  });
  
  return path;
};

console.log("Test 1:");
knightMovesWithOutput([0, 0], [1, 2]);

console.log("\nTest 2:");
knightMovesWithOutput([0, 0], [3, 3]);

console.log("\nTest 3:");
knightMovesWithOutput([3, 3], [0, 0]);

console.log("\nTest 4:");
knightMovesWithOutput([0, 0], [7, 7]);

console.log("\nTest 5:");
knightMovesWithOutput([3, 3], [4, 3]);