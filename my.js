function calculate()
{
    const tot = document.getElementById("total").value;
    const r = document.getElementById("rate").value;
    const tip = parseFloat(r) * parseFloat(tot) / 100;
    const tax = (5.5 / 100) * parseFloat(tot);
    const grand = tip + tax + parseFloat(tot);
    document.getElementById("tip").innerHTML = "$" + tip.toFixed(2);
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);
    document.getElementById("gtotal").innerHTML = "$" + grand.toFixed(2);
}