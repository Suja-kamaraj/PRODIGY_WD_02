var hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset');
var Lap = document.getElementById('lap');
var Laps = document.getElementById('laps');
let lapnum = 1;
var lastLap = { hour: 0 , minute : 0, second: 0 ,  count: 0};

function leftPad(value) {
	return value < 10 ? ('0' + value) : value;
}

startBtn.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

stopBtn.addEventListener('click', function () { 
	timer = false; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr').innerHTML = "00"; 
	document.getElementById('min').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('millisec').innerHTML = "00"; 
	Laps.innerHTML = '<strong>LAPS</strong> <br><br> ';
	lapnum = 1;
	lastLap = { hour: 0 , minute : 0, second: 0 ,  count: 0};
}); 

function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('millisec').innerHTML = countString; 
		setTimeout(stopWatch, 10); 
	} 
}

Lap.onclick = function() {
  var lapHour = hour - lastLap.hour;
  var lapMinute = minute - lastLap.minute;

  if (lapMinute < 0) {
	var lapMinute = minute - lastLap.minute + 60;
  }

  var lapSecond = second - lastLap.second;
  if (lapSecond < 0) {
	var lapSecond = second - lastLap.second + 60;
  }

  var lapCount = count - lastLap.count;
  if (lapCount < 0) {
	var lapCount =count-lastLap.count + 100;
  }

  lastLap = {hour: hour,minute: minute,second: second,count: count};

  Laps.innerHTML += "<li>" +"Lap " + lapnum++  + " – " + leftPad(lapHour) + ":" + leftPad(lapMinute) + ":" + leftPad(lapSecond) + ":" + leftPad(lapCount) + "</li>";
}



