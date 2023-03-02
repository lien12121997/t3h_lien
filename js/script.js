setTimeout(function() {
    luckyNumber();
}, 2000);

function hoiTuoi() {
    var ten = prompt("Nhập tên:");
    var tuoi = prompt("Nhập tuổi: ");

    tuoi = parseInt(tuoi);

    while(isNaN(tuoi)) {
        tuoi = prompt("Nhập tuổi: ");
        tuoi = parseInt(tuoi);
    }

    if(tuoi >= 18) {
        alert("Chào mừng " + ten);
        console.log(`Chào mừng ${ten} tham gia`);
    } else {
        alert("Yêu cầu rời khỏi nơi này");
    }
}

// Math.random() : 0->1
// parseInt(Math.random()*100) : 0->99

function luckyNumber() {
    var lucky = parseInt(Math.random()*100);
    var so;

    for(var i = 1; i<=5; i++) {
        so = prompt("Nhập số của bạn từ 0 - 99: ");
        so = parseInt(so);

        while(isNaN(so) || so < 0 || so > 99) {
            so = prompt("Thông tin bạn nhập phải là số và từ 0-99: ");
            so = parseInt(so);
        }

        if(so == lucky) {
            alert("chúc mừng trúng thưởng số:" + lucky);
            break;
        }

        if(i == 5) {
            alert('Bạn đã hết lượt');
        }
    }
}