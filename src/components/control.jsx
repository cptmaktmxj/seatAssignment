function setRowsCols(){
    return(
       <form action="seatGrid.jsx" method="post">
        <ul>
            <li>
            <label for="rows">행:</label>
            <input type="number" min="1" max="12" id="rows" name="setted_rows" />
            </li>
            <li>
            <label for="cols">열:</label>
            <input type="number" min="1" max="12" id="cols" name="setted_cols" />
            </li>
        </ul>
        <input type="button" value="선택"/>
        </form> 
    );
}

<button onClick={showModal}>배치 시작</button>

//배치 시작 버튼,자리 배치 저장 버튼,클릭 안내 문구,초기화 버튼 -> App.jsx의 setState를 실행되게 하는 함수들. 예를 들면, 버튼 등