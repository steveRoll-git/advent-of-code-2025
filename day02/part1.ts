const input = Deno.readTextFileSync("input")

const isInvalid = (s: string) =>
  s.length % 2 == 0 && s.substring(0, s.length / 2) == s.substring(s.length / 2)

const countInvalid = (from: number, to: number) => {
  let count = 0
  for (let i = from; i <= to; i++) {
    if (isInvalid(String(i))) {
      count += i
    }
  }
  return count
}

let count = 0

for (const r of input.matchAll(/(\d+)\-(\d+)/g)) {
  const [_, from, to] = r.map((n) => Number(n))
  count += countInvalid(from, to)
}

console.log(count)
