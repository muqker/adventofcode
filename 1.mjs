import readline from 'readline'
import fs from 'fs'

const fileStream = fs.createReadStream('1.input.txt')
const rl = readline.createInterface({ input: fileStream })

let prev = null
let countIncreases = 0
for await (const line of rl) {
  const value = Number(line)
  if (prev !== null && value > prev) {
    countIncreases += 1
  }
  prev = value
}

console.log(countIncreases)
