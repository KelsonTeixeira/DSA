
function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if(breaks[i]) break;
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if(breaks[i]) return i;
  }

  return -1;
}

function twoCrystalBallsByMe(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if(breaks[i]) break;
  }

  let j = i - jumpAmount;

  for (; j < i;  j++) {
    if(breaks[j]) return j;
  }

  return -1;
}

export { twoCrystalBalls, twoCrystalBallsByMe };