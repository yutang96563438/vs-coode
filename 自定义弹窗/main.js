
var modalBtn = document.getElementById('modalBtn'),
    simpleModal = document.getElementById('simpleModal'),
    closeBtn = document.getElementById('closeBtn');

    modalBtn.addEventListener('click', openModal);
    function openModal() {
        simpleModal.style.display = 'block'; 
    }

    closeBtn.addEventListener('click', closeModal);
    function closeModal() {
        simpleModal.style.display = 'none'
    }

    window.addEventListener('click',outsiteClick);
    function outsiteClick(event) {
        if(event.target == simpleModal){
            simpleModal.style.display = 'none';
        } 
    }
