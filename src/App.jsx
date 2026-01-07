export const initialSeats = {
  rows: 8,
  cols: 8,
  fixedSeats: []
} //전체 자리의 초기상태

export const people = [
  { id: 1, name: "name", gender: "M", studentId: 2025000000 },
]

export function createSeats(rows, cols) {
  return Array.from({ length: rows * cols }, (_, i) => ({
    id: i,
    row: 1,
    col: 1,
    person: null,
    fixed: false
  }))
} //초기상태의 각 자리들의 행렬을 만듦

const [seats, setSeats] = useState(createSeats(5, 6)) //배열 선언

function Seat({ seat }) {
  return (
    <div>
      {seat.person ? seat.person.name : "."}
    </div>
  )
}

function assignPerson(seats, seatId, person) {
  return seats.map(seat =>
    seat.id === seatId //seat.id가 seatId와 같으면
      ? { ...seat, person } //seat의 모든 요소 복사한 새 객체 만들고 person만 수정
      : seat //다르면 그냥 원래 seat 객체
  )
}

function toggleFixed(seats, seatId) {
  return seats.map(seat =>
    seat.id === seatId
      ? { ...seat, fixed: !seat.fixed }
      : seat
  )
}


