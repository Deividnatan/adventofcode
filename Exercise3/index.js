const fs = require("fs")

fs.readFile('Exercise3/file.txt', 'utf8', (err, data) => {
  // Create a dictionary with the prioritys of each one
  let lines = data.split('\n')
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let priority = []
  for (let i = 0; i < alphabet.length; i++) priority[alphabet[i]] = i + 1
  let result = []
  let sum = 0
  let sum2 = 0

  for (let line = 0; line < lines.length; line++) {
    //Divide the two containers 
    const firstHalf = lines[line].substr(0, lines[line].length / 2);
    const secondHalf = lines[line].substr(lines[line].length / 2, lines[line].length / 2,)
    //Find the repeated item and make the sum of the priority
    result = firstHalf.split('').filter(element => secondHalf.includes(element))
    sum += priority[result[0]]

    if (line % 3 == 0) {
      letter = lines[line].split('').filter(element => lines[line + 1].includes(element)).
        filter(element => lines[line + 2].includes(element))
      sum2 += priority[letter[0]]
    }
  }
  console.log(sum)
  console.log(sum2)
})