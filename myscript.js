
var x = setInterval(function() {
var now = new Date().getTime();
var distance = 24 - now;
var hours =Math.abs( Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
var minutes =Math.abs(( Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))+1);
var seconds = Math.abs((Math.floor((distance % (1000 * 60)) / 1000))+1);
if (hours == 24) {
  hours = 00;
}
else if (hours <10) {
  hours = "0"+hours
}
if (minutes<10) {
  minutes = "0"+minutes
}
if (seconds<10) {
  seconds = "0"+seconds
}
document.getElementById("jackie").innerHTML = hours + " : " +  minutes + " : " + seconds ;
}, 1000);
  function aaAb() {
    var butt =document.getElementById('butt1');
    var mun =document.getElementById('mun1');
    if (mun.style.display == "block") {
      mun.style.display = "none";
      butt.style.display = "block";
    }
    else if (mun.style.display == "none") {
      mun.style.display = "block";
      butt.style.display = "none";
    }
  }
  var container = document.querySelector(".hoster");
  container.addEventListener('click', function (event) {
    var img = document.getElementById('IMG');
    var up = document.getElementById('up');
    var x = event.clientX;
    var y = event.clientY;
    var ball = document.querySelector(".holder");
    img.style.display = "none";
    up.style.display = "none";
    img.style.display = "block";
    up.style.display = "block";
    ball.style.position = "absolute";
    ball.style.left = `${x-15}px`;
    ball.style.top = `${y-15}px`;
    Y01 = y-15;
    X01 = x-15;
    document.getElementById('Y01').value = Y01;
    document.getElementById('X01').value = X01;
    var delayInMilliseconds = 900; //2.8 second

    setTimeout(function() {
      //your code to be executed after 2.8 second
      img.style.display = "none";
      up.style.display = "none";
    }, delayInMilliseconds);
  });
  var d = setInterval(function() {
  var ball = document.querySelector(".holder");
  if (ball.style.display=="block") {
    var y = document.getElementById('Y01').value;
    var x = document.getElementById('X01').value;
    ball.style.position = "absolute";
    ball.style.left = `${x}px`;
    ball.style.top = `${y-2.5}px`;
    Y01 = y-5; //riseing up with 25 px each
    X01 = x;
    document.getElementById('Y01').value = Y01;
    document.getElementById('X01').value = X01;
  }
  }, 45);
