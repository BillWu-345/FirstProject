let timer = "5:00"
document.getElementById("textfield").innerHTML = timer;

var x = false;
function countDown () {
 
  let currenttime = document.getElementsByTagName('p')[0].textContent;
  let countdowntime = currenttime.split(":");
 
  let seconds = countdowntime.pop();
  let minutes = countdowntime.pop();
  let hours = countdowntime.pop();
  let days = countdowntime.pop();

  seconds--;
 
  if (seconds == -1){
    seconds += 60;
    minutes --;
  }

  if (minutes == -1){
    minutes += 60;
    hours --;
  }

  if (hours == -1){
    hours += 24;
    days --;
  }  

  if (days == undefined) {
    if (hours == undefined) {
      if (minutes == undefined) {
        document.getElementById("textfield").innerHTML = seconds;
        zero(days, hours, minutes, seconds);
        return;
      }
      document.getElementById("textfield").innerHTML = minutes + ":" + seconds;
      zero(days, hours, minutes, seconds);
      return;
    }
    document.getElementById("textfield").innerHTML = hours + ":"
  + minutes + ":" + seconds;
    zero(days, hours, minutes, seconds);
    return;
  }
  
  document.getElementById("textfield").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds;
  zero(days, hours, minutes, seconds);

}

function zero (d, h, m, s) {
  if ((d == 0 || d == undefined) && (h == 0 || h == undefined) && (m == 0 || m == undefined)  && (s == 0 || s == undefined))  {
    alert ("Time's Up");
    clearInterval(x);
  }
}

function startStop () {
  if (x == false) {
    timer = document.getElementsByTagName('p')[0].textContent;
    x = setInterval(countDown, 1000);
  } else {
    clearInterval(x);
    x = false;
  }
}

function reset () {
  if (x == false) {
    document.getElementById("textfield").innerHTML = timer;
  } else {
    clearInterval(x);
    document.getElementById("textfield").innerHTML = timer;
  }
}

