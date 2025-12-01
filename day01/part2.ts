const input = Deno.readTextFileSync("input")

let current = 50
let result = 0

const max = 100

const mod = (a: number, b: number) => ((a % b) + b) % b

for (const [_, dir, amountS] of input.matchAll(/(.)(\d+)/g)) {
  const amount = Number(amountS)
  let base = current
  if (dir == "L") {
    current = mod(current - amount, max)
    base = current
  } else {
    current = mod(current + amount, max)
  }
  if (current == 0) {
    result++
  }
  result += Math.floor((amount + base - 1) / max)
}

console.log(result)
