`use strict`
const readline = require('readline');
const fs = require('fs');

async function readFully (file) {
  const f = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity
  })

  const data = new Array()

  for await (const line of f) {
    data.push(line)
  }
  return data
}

async function dec1() {
  const data = new Set(((await readFully('1input.txt')).map(l=> Number.parseInt(l, 10))))

  data.forEach((n,_) => {
    const rest = 2020 - n
    if (data.has(rest)) {
      console.log(`pair: ${n}, ${rest}: ${n * rest}`)
    }
  })

  data.forEach((n,_) => {
    data.forEach((m,_) => {
      const rest = 2020 - n - m
      if (data.has(rest)) {
        console.log(`3: ${n} ${m}, ${rest}: ${n * m * rest}`)
      }
    })
  })
}

dec1()
