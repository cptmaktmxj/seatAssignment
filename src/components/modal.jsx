

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
                        //학생 이름,학번,성별만 보이게
                        //각 행별로 삭제버튼도 구현 onClick={() => handleDeleteStudent(student.id)}
                    </table> 
                </div>

                <div className="section">
                    <button id="random-start-button" onClick={handleAssign}>배치 시작</button>
                </div>

            </div>
        </div>
    )
}