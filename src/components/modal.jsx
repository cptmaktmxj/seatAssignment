<input value="엑셀파일 업로드" type="file" onChange={setShowFiles}/>

<label for "add-student">학생 수동 추가<label/>

<form>
    <div id="add-student">
        <input type="text" name="name" placeholder="이름"/>
        <input type="text" name="studentId" placeholder="학번"/>
        <select name="gender" onChange={if }>
            <option value="M">남</option>
            <option value="F">여</option>
        </select>
    </div>
    <button value="추가"></button>
</form>

<table>
    //학생 명단 + 삭제 기능
</table>

function Modal() {
    return(
       <div className="Modal">

        </div> 
    )
}