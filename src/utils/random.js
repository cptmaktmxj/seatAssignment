export function random(seats,students){
    const filteredSeats=seats.filter(seat => !(seat.fixed))
    const shuffledStudents=[...students].sort(() => Math.random() - 0.5);
    return(
        Array.from( , (idx) => (shuffledStudents[idx],filteredSeats[idx]))
        //suff를 fil에 하나씩 대응시키자.
    )
    //랜덤배치한 새로운 학생 배열을 생성하고 (seat,student)의 배열을 리턴
}