

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+('%');
}




function compute()
{


    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal*years*rate/100;

    var amount = principal*1+interest*1;


    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML ="If you deposit "+principal+"\<br\> at an interest rate of "+rate+"% \<br\>You will recieve an ineterst of "+amount+",\<br\> in the year "+year

}
