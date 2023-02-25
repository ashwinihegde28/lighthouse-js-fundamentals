const finalPosition = function (moves) {
  let pos = [0, 0];
  for (let move of moves) {
    switch (move) {
    case "north":
      pos[1] += 1;
      break;
    case "south":
      pos[1] -= 1;
      break;
    case "east":
      pos[0] += 1;
      break;
    case "west":
      pos[0] -= 1;
      break;
    default:
      break;
    }
  }
  return pos;
};
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);