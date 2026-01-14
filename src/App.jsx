import {useState} from 'react'
import { createSeats } from "./data/initialSeats"
import { students as initialStudents } from "./data/studentsInfo"
import Header from "./components/Header"
import Footer from "./components/Footer"
import seatGrid from "./components/seatGrid"
import {rowsAndColsForm,assignStartButton,saveButton,resetButton} from "./components/control"
import modal from "./components/modal"
import random from "./utils/random"


function App(){
  const [seats, setSeats] = useState(createSeats(6,6))
  const [students,setStudents] = useState(initialStudents)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function toggleSeat(){
      setSeats(prevSeats =>
      prevSeats.map((seat, i) =>
        i === index
          ? {
              ...seat,
              fixed: !seat.fixed,
              removed: !seat.removed
            }
          : seat
      )
    )
  }

  function handleAssign(){
      const newSeat=random(seats,students)
      setSeats(newSeat)
  }

  function handleSave(){
    //storage.js에 저장
  }

  function handleReset(){
    //자리 상태와 자리 표시 초기화, 학생은 냅둠
  }

  function handleAddStudent(){
    const newStudents= //학생 명단 추가 구현
    setStudents(newStudents)
  }

  function handleDeleteStudent(){
    Array.from(()=>{const student = students[students]}) //students 배열의 각 원소를 student로 정의
    const newStudents= //학생 명단 삭제 구현(student.id로 학생 구분)
    setStudents(newStudents)
  }

  return (
    <div className="app">
      <Header />
      <main>
        <seatGrid rows={rows} cols={cols} studentName={studentName} seats={seats} onSeatClick={toggleSeat}/>
        <rowsAndColsForm/>
        <controlButtons/>
        <assignStartButton onClick={() => setIsModalOpen(true)}/>
        <saveButton onClick={handleSave}/>
        <resetButton onClick={handleReset}/>
      </main>
      <Footer />

      {isModalOpen && (<modalOverlay
      students={students}
      onClose={() => setIsModalOpen(false)}
      onAssign={handleAssign}
      addStudent={handleAddStudent}
      deleteStudent={handleDeleteStudent}
      />)}
    </div>
  )
  
}

export default App