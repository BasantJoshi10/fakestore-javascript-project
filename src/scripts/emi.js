function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}

function YearChange(){
    document.getElementById("txtYears").value= document.getElementById("rangeYears").value;
}

function RangeChange(){
    document.getElementById("txtRate").value= document.getElementById("rangeRate").value;
}

function CalculateClick(){
        var p = parseInt(document.getElementById("txtAmount").value);
        var n = parseInt(document.getElementById("txtMonth").value)*12;
        var r = parseFloat(document.getElementById("txtRate").value)/12/100;
        var emi= p * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;
        document.getElementById("result").innerHTML= "Your monthly installment amount is <b> <span class='text-primary'> &#8377; " + emi.toFixed(2) + "</span></b> for " + p + " in "  + n/12 + " years.. "; 
}
