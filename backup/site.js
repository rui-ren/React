window.onload = function(){
    showTimer();
}

function showTimer(){
    setInterval(clock, 1000)
}

function clock(){
    this.document.getElementById("timespan").innerHTML = (new this.Date()).toLocaleTimeString();
}

