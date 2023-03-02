setTimeout(function() {
    jackpot();
}, 2000);

function jackpot() {
    var arr_lucky = arrNumberLucky();
    var arr_so = [];
    var list = '';
    var count = 0;

    for(var i = 0; i<6; i++) {
        var so = prompt("Nhập số của bạn từ 0 - 55: ");
        so = parseInt(so);

        while(isNaN(so) || so < 0 || so > 55 || inArray(so, arr_so) == true) {
            so = prompt("Thông tin bạn nhập phải là số và từ 0-55 và không trùng với các số bạn đã nhập: ");
            so = parseInt(so);
        }

        arr_so[i] = so;

        if(inArray(so, arr_lucky) == true) {
            count +=1;
            list = list + so + ' ';
        }
    }

    if(count == 3) {
        alert(`Bạn đã đoán trúng 3 số: ${list} Chúc mừng bạn đã nhận được 200k.`);
    } else if(count == 4) {
        alert(`Bạn đã đoán trúng 4 số: ${list} Chúc mừng bạn đã nhận được 1700k.`);
    } else if(count == 5) {
        alert(`Bạn đã đoán trúng 5 số: ${list} Chúc mừng bạn đã nhận được 82500k.`);
    } else if(count == 6) {
        alert(`Chúc mừng bạn đã trúng Jackpot 30 tỷ. ${list}`);
    } else {
        alert('Chúc bạn may mắn lần sau.');
    }
}

function arrNumberLucky() {
    var arr = [];

    for(var y = 0; y<6; y++) {
        var kq = parseInt(Math.random()*56);

        while(inArray(kq, arr) == true) {
            kq = parseInt(Math.random()*56);
        }

        arr[y] = kq;
    }
    return arr;
}

function inArray(number, arr) {
    var length = arr.length;
    for(var x = 0; x < length; x++) {
        if(arr[x] == number) return true;
    }
    return false;
}