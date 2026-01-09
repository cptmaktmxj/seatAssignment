import {useState} from 'react'
import { initialSeats, createSeats } from "./data/initialSeats"
import { students as initialStudents } from "./data/studentsInfo"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SeatGrid from "./components/seatGrid"
import RowsAndColsForm from "./components/control"
import AssignStartButton from "./components/control"
import Modal from "./components/modal"

function App(){
  const [seats, setSeats] = useState(createSeats(6,6))
  const [students,setStudents] = useState(initialStudents)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="App">

      <Header />
      <main>
        <SeatGrid/>
        <RowsAndColsForm/>
        <AssignStartButton/>
      </main>
      <Footer />

      {isModalOpen && (<Modal/>)}

    </div>
  )
  
}

export default App


/*
function Seat({ seat }) {
  return (
    <div>
      {seat.person ? seat.person.name : "."}
    </div>
  )
}

function AssignPerson(seats, seatId, person) {
  return seats.map(seat =>
    seat.id === seatId //seat.id가 seatId와 같으면
      ? { ...seat, person } //seat의 모든 요소 복사한 새 객체 만들고 person만 수정
      : seat //다르면 그냥 원래 seat 객체
  )
}

function ToggleFixed(seats, seatId) {
  return seats.map(seat =>
    seat.id === seatId
      ? { ...seat, fixed: !seat.fixed }
      : seat
  )
}
  */