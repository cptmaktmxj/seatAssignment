function Modal({students, onClose, addStudent, deleteStudent, handleAssign}) {
    return(
        <div className="modalOverlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

                <div className="section">
                    <input value="엑셀파일 업로드" type="file"/>
                </div>

                <div className="section">
                    <label for id="student-add">학생 수동 추가</label>
                    <form>
                        <div id="add-student">
                            <input type="text" name="name" placeholder="이름"/>
                            <input type="text" name="studentId" placeholder="학번"/>
                            <select name="gender">
                                <option value="M">남</option>
                                <option value="F">여</option>
                            </select>
                        </div>
                        <button id="add-student-button" onClick={addStudent}>추가</button>
                    </form>
                </div>

                <div className="section">
                    <h4>학생 명단</h4>
                    <table>
                        <tbody>
                            {Array.from({ length: rows }, (_, r) => (
                            <tr key={r}>
                                const student = students[students]
    
                                const className =
                                    "seat" +
                                    (seat.fixed ? " seat--fixed" : "") +
                                    (seat.removed ? " seat--removed" : "")

                                return (
                                    <td
                                    key={student.id} //삭제 시 학생의 id를 핸들러에 넘겨줌
                                    className={className}
                                    onClick={() => deleteStudent(student.id)} //클릭을 받는 부분인데 버튼형식으로 구현해야됨
                                    >
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="section">
                    <button id="random-start-button" onClick={handleAssign}>배치 시작</button>
                </div>

            </div>
        </div>
    )
}