var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	seconds = pad( parseInt( seconds_left % 30 ) );

	// format countdown string + set tag value
	countdown.innerHTML ="<span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}
var k = 0;
function MyButton(){
	if(k % 2 == 0){
		document.getElementById("button").style.display = "none";
		k ++;
	}
	else{
		document.getElementById("button").style.display = "block";
		k ++;
	}
}