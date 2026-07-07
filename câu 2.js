let tong = 0;
let n = Number(prompt("nhập số"))
for (let i = 0; i < n ; i ++)
{
    if (n % i === 0)
    {
        tong += i;
    }
}
if (tong === n)
{
    console.log("số hoàn hảo");
}
else
{
    console.log("không phải");
}