
function SeatGrid({seats,studentName,rows,cols,onSeatClick}){
    return (
        <div className="seatGrid">
            <table>
                <tbody>
                    {Array.from({ length: rows }, (_, r) => (
                    <tr key={r}>
                        {Array.from({ length: cols }, (_, c) => {
                        const seat = seats[r * cols + c] //seats의 원소를 seat으로 정의
                        const student = seat.studentName ? studentName[seat.studentName] : null
                        //student는 윗줄에서 정의한 seat에 할당된 학생 이름
                        const label = seat.removed ? "" : (student?.studentName ?? "")

                        const className =
                            "seat" +
                            (seat.fixed ? " seat--fixed" : "") +
                            (seat.removed ? " seat--removed" : "")

                        return (
                            <td
                            key={seat.id}
                            className={className}
                            onClick={() => onSeatClick(seat.id)} //클릭을 받는 부분
                            >
                            {seat.removed ? <span className="seat__plus">+</span> : label}
                            </td>
                        )
                        })}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}