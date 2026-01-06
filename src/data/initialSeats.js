export const initialSeats = {
  rows: 8,
  cols: 8,
  fixedSeats: []
} //전체 자리의 초기상태

export function createSeats(rows, cols) {
  return Array.from({ length: rows * cols }, (_, i) => ({
    id: i,
    row: 1,
    col: 1,
    person: null,
    fixed: false
  }))
} //초기상태의 각 자리들의 행렬을 만듦

