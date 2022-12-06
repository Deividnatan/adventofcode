const fs = require('fs')

fs.readFile('Exercise4/file.txt', 'utf8', (err, data) => {
  let numOverlapT= 0
  let numOverlapP= 0
  let lines = data.split('\n')
  
  lines.forEach((line) => {
    let secAsign = line.split(",");
    let firstElf = secAsign[0].split("-");
    let secondElf = secAsign[1].split("-");
    firstElf = firstElf.map(Number);
    secondElf = secondElf.map(Number);
    // Find if one is inside another
    numOverlapT += (
      (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1]) ||
      (firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[1])
    );
    numOverlapP+=((firstElf[0]>=secondElf[0] && firstElf[0]<=secondElf[1])||
                 (firstElf[1]>=secondElf[0]) && firstElf[1]<=secondElf[1] ||
                 (firstElf[0] >= secondElf[0] && firstElf[1] <= secondElf[1]) ||
                 (firstElf[0] <= secondElf[0] && firstElf[1] >= secondElf[1])
                 )
  });
  console.log(numOverlapT)
  console.log(numOverlapP)


})

