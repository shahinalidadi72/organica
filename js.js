function over(){
    document.getElementById('sale').style.backgroundColor="orange";
}
function leav(){
    document.getElementById('sale').style.backgroundColor="azure";
}


function over1(){
    document.getElementById('sale1').style.backgroundColor="orange";
}
function leav1(){
    document.getElementById('sale1').style.backgroundColor="azure";
}

function over2(){
    document.getElementById('sale2').style.backgroundColor="orange";
}
function leav2(){
    document.getElementById('sale2').style.backgroundColor="azure";
}

function over3(){
    document.getElementById('sale3').style.backgroundColor="orange";
}
function leav3(){
    document.getElementById('sale3').style.backgroundColor="azure";
}


function over4(){
    document.getElementById('sale4').style.backgroundColor="orange";
}
function leav4(){
    document.getElementById('sale4').style.backgroundColor="azure";
}


function over5(){
    document.getElementById('sale5').style.backgroundColor="orange";
}
function leav5(){
    document.getElementById('sale5').style.backgroundColor="azure";
}
var interval1 = setInterval(tetrisTimer, 1000);

function tetrisTimer() {
    var minute = document.getElementById("clock-minute").innerText;
    var second = document.getElementById("clock-second").innerText;

    if(parseInt(second)===59)
    {
        var newMin = (parseInt(minute) + 1).toString();
        if(newMin<10)
            newMin="0" + newMin;
        document.getElementById("clock-minute").innerHTML = newMin;
        document.getElementById("clock-second").innerHTML = "00";
    } else {
        newSec = (parseInt(second) + 1).toString();
        if(newSec<10)
            newSec="0" + newSec;
        document.getElementById("clock-second").innerHTML = newSec;
    }
}

function scrolled()    
   if(window.scroll>"500px"){
    document.getElementById('bannervid').style.width="300px"
}