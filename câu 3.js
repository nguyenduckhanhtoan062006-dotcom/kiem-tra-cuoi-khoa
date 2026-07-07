let input = prompt("Nhập tháng và năm theo định dạng MM/yyyy (Ví dụ: 02/2026):");

let regex = /^(0[1-9]|1[0-2])\/([0-9]{4})$/;

if (!input || !regex.test(input)) {
    console.error("Định dạng nhập vào không hợp lệ! Vui lòng nhập đúng dạng MM/yyyy.");
} else {
    let parts = input.split("/");
    let thang = parseInt(parts[0], 10);
    let nam = parseInt(parts[1], 10);

    let soNgay = 0;
    let laNamNhuan = false;
    if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0))
    {
        laNamNhuan = true;
    }

    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            soNgay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            soNgay = 30;
            break;
        case 2:
            if (laNamNhuan) {
                soNgay = 29;
                console.log(`-> Năm ${nam} là năm nhuận.`);
            } else {
                soNgay = 28;
                console.log(`-> Năm ${nam} là năm thường.`);
            }
            break;
    }

    console.log(`Tháng ${thang}/${nam} có ${soNgay} ngày.`);
}