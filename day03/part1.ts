const input = Deno.readTextFileSync("input")

let result = 0

for (const line of input.split("\n")) {
  let bestFirst = line[0]
  let best = 0
  for (let i = 1; i < line.length; i++) {
    const potential = Number(bestFirst + line[i])
    if (Number(potential) > best) {
      best = potential
    }
    if (line[i] > bestFirst) {
      bestFirst = line[i]
    }
  }
  result += best
}

console.log(result)
