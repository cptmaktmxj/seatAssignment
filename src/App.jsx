import {useState} from 'react'
import { initialSeats, createSeats } from "./data/initialSeats"
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

  }

  function handleAssign(){
      const result=random(seats,students)
      setSeats(result)
  }

  function handleStudent(){
    const newStudents=
    setStudents(newStudents)
  }

  return (
    <div className="app">

      <Header />
      <main>
        <seatGrid seats={seats} onSeatClick={toggleSeat} onColsClick={makeInterval}/>
        <rowsAndColsForm/>
        <assignStartButton onClick={() => setIsModalOpen(true)}/>
        <saveButton onClick={저장 함수}/>
        <resetButton onClick={}/>
      </main>
      <Footer />

      {isModalOpen && (<modalOverlay
      students={students}
      onClose={() => setIsModalOpen(false)}
      onAssign={handleAssign}
      changeStudent={handleStudent}
      />)}

    </div>
  )
  
}

export default App