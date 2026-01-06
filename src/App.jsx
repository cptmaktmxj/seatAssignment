import {initialSeats} from './data/initialSeats'

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


