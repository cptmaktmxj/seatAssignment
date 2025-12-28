

const [seats, setSeats] = useState(createSeats(5, 6))

function Seat({ seat }) {
  return (
    <div>
      {seat.person ? seat.person.name : "."}
    </div>
  )
}

function assignPerson(seats, seatId, person) {
  return 
}

function toggleFixed(seats, seatId) {
  return
}
