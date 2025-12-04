const input = Deno.readTextFileSync("input")

const rows = input.split("\n").filter((l) => l.length > 0)

const mapWidth = rows[0].length
const mapHeight = rows.length

const inMap = (x: number, y: number) =>
  x >= 0 && x < mapWidth && y >= 0 && y < mapHeight

const dirs = [
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
  { x: -1, y: 1 },
  { x: -1, y: 0 },
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
]

let result = 0

for (let x = 0; x < mapWidth; x++) {
  for (let y = 0; y < mapHeight; y++) {
    if (rows[y][x] == "@") {
      let count = 0
      for (const d of dirs) {
        const nx = x + d.x
        const ny = y + d.y
        if (inMap(nx, ny) && rows[ny][nx] == "@") {
          count++
        }
      }
      if (count < 4) {
        result++
      }
    }
  }
}

console.log(result)
