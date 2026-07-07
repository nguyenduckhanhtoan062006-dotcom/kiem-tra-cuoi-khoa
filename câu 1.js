let arr = [];
let tong = 0;
let dem = 0;
let n = parseInt(prompt("Bạn muốn nhập bao nhiêu số?"));
for (let i = 0; i < n; i++)
{
    arr[i] = Number(prompt("Nhập số thứ " + (i + 1)));
}

for (let i = 0; i < arr.length; i++)
{
    if (arr[i] % 3 === 0)
    {
        tong += arr[i];
        dem++;
    }
}

if (dem > 0)
{
    let trungBinhCong = tong / dem;
    console.log(trungBinhCong);
} else
{
    console.log("Không có số nào trong mảng chia hết cho 3 để tính trung bình cộng.");
}