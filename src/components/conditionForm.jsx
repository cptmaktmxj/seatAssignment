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

