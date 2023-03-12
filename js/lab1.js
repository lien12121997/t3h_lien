setTimeout(function () {
    jackpot();
}, 2000);

function jackpot() {
    var arr_lucky = arrNumberLucky();
    var arr_so = [];
    var list = 'Số của bạn: ';
    var list_trung = '';
    var count = 0;

    var number1 = document.getElementById('number1');

    console.log('arr lucky', arr_lucky)

    for (var i = 0; i < 6; i++) {
        var so = prompt("Nhập số của bạn từ 1 -> 55: ");
        so = parseInt(so);

        while (isNaN(so) || so < 1 || so > 55 || arr_so.includes(so)) {
            so = prompt("Thông tin bạn nhập phải là số và từ 1 -> 55 và không trùng với các số bạn đã nhập: ");
            so = parseInt(so);
        }

        arr_so.push(so);

        list = list + ' ' + so;

        if (arr_lucky.includes(so)) {
            count += 1;
            list_trung = list_trung + ' ' + so;
        }
    }

    console.log('arr list', list)
    console.log('arr list trung', list_trung)

    number1.innerText = list;
    showkq(arr_lucky, list_trung, count);
}

function showkq(arr_lucky, list_trung, count) {
    var number2 = document.getElementById('number2');
    var number3 = document.getElementById('number3');
    var msg = document.getElementById('msg');

    var list_kq = 'Dãy số của chương trình: ';
    number2.innerText = list_kq;

    for (i = 0; i < arr_lucky.length; i++) {
        list_kq = list_kq + ' ' + arr_lucky[i];
        number2.innerText = list_kq;
    }

    setTimeout(function () {
        number3.innerHTML = 'Dãy hợp lệ: ' + list_trung;

        if (count == 3) {
            msg.innerText = `Bạn đã đoán trúng 3 số: Chúc mừng bạn đã nhận được 200k.`;
        } else if (count == 4) {
            msg.innerText = `Bạn đã đoán trúng 4 số: Chúc mừng bạn đã nhận được 1700k.`;
        } else if (count == 5) {
            msg.innerText = `Bạn đã đoán trúng 5 số: Chúc mừng bạn đã nhận được 82500k.`;
        } else if (count == 6) {
            msg.innerText = `Chúc mừng bạn đã trúng Jackpot 30 tỷ.`;
        } else {
            msg.innerText = 'Chúc bạn may mắn lần sau.';
        }
    }, 5000);
}

function arrNumberLucky() {
    var arr = [];

    while (arr.length < 6) {
        var kq = autoNumber(1, 55);

        if (!arr.includes(kq)) {
            arr.push(kq);
        }
    }
    return arr;
}

function autoNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}