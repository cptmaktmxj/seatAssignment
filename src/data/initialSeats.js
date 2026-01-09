export const initialSeats = {
  rows: 6,
  cols: 6,
  fixedSeats: []
}

export function createSeats(rows, cols) {
  return Array.from({ length: rows * cols }, (_, i) => {
    const row = Math.floor(i / cols)
    const col = i % cols

    return {
      id: `${row}-${col}`,
      personId: null,
      fixed: false,
      removed: false
    }
  })
}
