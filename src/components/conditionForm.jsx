function grid(){
    return(
       <form action="seatGrid.jsx" method="post">
        <ul>
            <li>
            <label for="rows">행:</label>
            <input type="number" id="rows" name="setted_rows" />
            </li>
            <li>
            <label for="cols">열:</label>
            <input type="number" id="cols" name="setted_cols" />
            </li>
        </ul>
        </form> 
    );
    
}

//행과 열 설정하는 폼 input type="number" , 그리고 조건 설정 모달