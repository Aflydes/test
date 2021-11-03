window.onload =  function(){

    var countDownDate = new Date().getTime() +30*60*1000;
    var timeLeft = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(timeLeft);
            document.getElementById("countdown").innerHTML = "Время вышло";
        }
    }, 1000);
}
