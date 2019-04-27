
var btn = document.getElementById('btn'),
    win = document.getElementById('win'),
    winHeader = document.getElementById('winHeader'),
    winBody = document.getElementById('winBody'),
    winFooter = document.getElementById('winFooter');

    btn.addEventListener('click',showWin,false);
    function showWin() {
        win.style.bottom = 10 + 'px';
        win.style.transition = 'all 2s ease-in 1s';
    }

    var closeBtn = winHeader.querySelector('span');
    closeBtn.addEventListener('click',closeWin,false);
    function closeWin(){
        win.style.bottom = -300 + 'px';
        win.style.transition = 'all 2s ease-in';
    }