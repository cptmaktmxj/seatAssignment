import {useState} from 'react'
import { initialSeats, createSeats } from "./data/initialSeats"
import { students as initialStudents } from "./data/studentsInfo"

//자리,학생 상태 선언
const [seats, setSeats] = useState(createSeats(6,6))
const [students,setStudents] = useState(initialStudents)



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