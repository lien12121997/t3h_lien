
list();

function title() {
    var timing = prompt("Nhập số phút: ")
    var myTimer, minutes, seconds;

    timing = timing*60;

    var min = document.getElementById('min');
    var sec = document.getElementById('sec');

    myTimer = setInterval(function() {
        minutes = parseInt(timing / 60, 10);
        seconds = parseInt(timing % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        min.innerText = minutes;
        sec.innerText = seconds;

        --timing;

        if (timing < 0) {
            clearInterval(myTimer);
        }
    }, 1000);
}

function list() {
    var menu = [
        "Bún đậu", "Bún bò", "Bún riêu", "Bún cá", "Bún sườn"
    ];

    var list = document.querySelectorAll('ul li');

    for(var i=0; i<menu.length; i++) {
        list[i].innerText = menu[i];
    }
}