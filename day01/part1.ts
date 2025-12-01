const input = Deno.readTextFileSync("input")

let current = 50
let result = 0

const max = 100

const mod = (a: number, b: number) => ((a % b) + b) % b

for (const [_, dir, amountS] of input.matchAll(/(.)(\d+)/g)) {
  const amount = Number(amountS)
  if (dir == "L") {
    current = mod(current - amount, max)
  } else {
    current = mod(current + amount, max)
  }
  if (current == 0) {
    result++
  }
}

console.log(result)
