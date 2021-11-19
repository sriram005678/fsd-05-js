


function difference(){
 let now = new Date().getTime();
 let countDownDate = new Date("jan 1, 2022 11:00:00").getTime();
     // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log(days, hours, minutes, seconds);

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
}


setInterval(difference, 1000);

 
// targetDate();



