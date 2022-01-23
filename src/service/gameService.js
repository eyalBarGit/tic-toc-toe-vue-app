const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 3, 6],
  [0, 4, 8]
];

export function checkWin(shape, playerPositions) {
  let winner;
  winPositions.forEach((currentWinPosition) => {
    if (
      currentWinPosition.every((number) => playerPositions.includes(number))
    ) {
      winner = shape;
    }
  });
  if (playerPositions.length === 5 && !winner) {
    winner = 'Tie';
  }
  return winner;
}

export function selectAiPosition(playerData) {
  const { aiShape, playerShape } = playerData;
  const aiPositions = aiShape.positions;
  const playerPositions = playerShape.positions;

  if (playerPositions.length === 5) return;
  let aiSelectedPosition = Math.floor(Math.random() * 8);

  if (
    playerPositions.includes(aiSelectedPosition) ||
    aiPositions.includes(aiSelectedPosition)
  ) {
    return selectAiPosition(playerData);
  }
  if (playerPositions.length < 2) return aiSelectedPosition;
  winPositions.map((currentWinPosition) => {
    if (playerPositions.some((number) => currentWinPosition.includes(number))) {
      if (!aiPositions.some((number) => currentWinPosition.includes(number))) {
        const matchedNumbers = [];
        currentWinPosition.forEach((number) => {
          if (playerPositions.includes(number)) {
            matchedNumbers.push(number);
          } else if (matchedNumbers.length > 1) {
            aiSelectedPosition = findNoneIncluded(currentWinPosition,
              matchedNumbers);
          }
        });
      }
    }
  });
  return aiSelectedPosition;
}

function findNoneIncluded(currPosition, listToCheck) {
  let noneDuplicatedPosition;
  noneDuplicatedPosition = currPosition.filter((number) => !listToCheck.includes(number));
  return noneDuplicatedPosition[0];
}

export const createBoard = (numberOfSquares = 9) => {
  const arr = [];
  for (let i = 0; i < numberOfSquares; i++) {
    arr.push({
      clickedPosition: i,
      shape: '',
      isClicked: false
    });
  }
  return arr;
};
