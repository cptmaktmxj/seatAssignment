function grid(){
        const modal = document.querySelector('.modal');
        const btnOpenModal=document.querySelector('.btn-open-modal');

        btnOpenModal.addEventListener("click", ()=>{
            modal.style.display="flex";
        });
    return(
        <div className="modal">
            <h2>조건</h2>
            <p>내용</p>
            <button class="btn-open-modal">조건 설정</button>
        </div>
        
    );
    
}