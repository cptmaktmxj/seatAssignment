function grid(){
        const modal = document.querySelector('.modal');
        const Modal=document.querySelector('.modal');

        Modal.addEventListener("click", ()=>{
            modal.style.display="flex";
        });
    return(
        <div className="modal">
            <h2>조건</h2>
            <p>내용</p>
            <button class="modal">조건 설정</button>
        </div>
        
    );
    
}

//배치 시작 버튼,자리 배치 저장 버튼,클릭 안내 문구,초기화 버튼 -> App.jsx의 setState를 실행되게 하는 함수들. 예를 들면, 버튼 등