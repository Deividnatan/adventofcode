//--- Day 1: Calorie Counting ---

const fs = require('fs');

fs.readFile('Exercicio1/file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let sum = 0;
  let sums = []
  //Read file line by line
  var lines = data.split('\n')
  for (var line = 0; line < lines.length; line++) {
    if (lines[line] != '') sum += parseInt(lines[line])
    else {
      sums.push(sum)
      sum = 0
    }
  }
  sums = sums.sort(function(a, b) { return b - a; })

  console.log(sums[0] + sums[1] + sums[2])
})
