//First column -> A for Rock, B for Paper, and C for Scissors.
//Second column -> X for Rock, Y for Paper, and Z for Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.

//X means you need to lose, 
//Y means you need to end the round in a draw
//Z means you need to win. Good luck!"
const fs = require('fs');

fs.readFile('Exercise/file.txt', 'utf8', (err, data) => {
  let lines = data.split('\n')
  let sum = 0
  let sum2 = 0
  let dict = {
    //Calculating the result
    "A X": [4,3],
    "B Y": [5,5],
    "C Z": [6,7],

    "A Y": [8,4],
    "B Z": [9,9],
    "C X": [7,2],

    "A Z": [3,8],
    "B X": [1,1],
    "C Y": [2,6],
    
  }
  
  for (let line = 0; line < lines.length; line++) {
    //Convert to the same variable correspondences
    sum += dict[lines[line]][0]
    sum2 += dict[lines[line]][1]
  }
  console.log('Sum 1: ' + sum + ' | ' + 'Sum 2: ' + sum2)
})