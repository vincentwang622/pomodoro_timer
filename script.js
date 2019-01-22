/* get button information */

var upButtonSession = document.getElementById('up'),
    session = parseInt(document.getElementById('session').textContent),
    downButtonSession = document.getElementById('down');

var upButtonBreak = document.getElementById('up2'),
    downButtonBreak = document.getElementById('down2'),
    breakSession = parseInt(document.getElementById('break'.textContent));

var play = document.getElementById('play'),
    pause = document.getElementById('pause'),
    refresh = document.getElementById('restart'),
    stop = document.getElementById('stop'),
    seconds = 0;

upButtonSession.addEventListener('click', function(){
    session += 1;
    document.getElementById('session').innerHTML = session;
});

downButtonSession.addEventListener('click', function(event){
    if (session > 1){
        session -= 1;
        document.getElementById('session').innerHTML = session;
    }
})

upButtonBreak.addEventListener('click', function(){
    breakSession += 1;
    document.getElementById('break').innerHTML = breakSession ;

});

downButtonBreak.addEventListener('click', function(){
  if (breakSession > 1){
    breakSession -= 1;
    document.getElementById('break').innerHTML = breakSession ;}

});

play.addEventListener('click', function(){
    event.preventDefault();
    document.getElementById('clockTitle').innerHTML = "Session";
    sessionInterval();
})

function padNumber(num){
    if (num < 10)
        return "0" + num;
    else
        return num;
}

function  sessionInterval(){
    pause.addEventListener('click', function(event){
        event.preventDefault();
        clearInterval(sessionInt);
    });

    refresh.addEventListener('click', function(event){
        event.preventDefault();
        sessionMin = session;
        seconds = 0;
    });

    stop.addEventListener('click', function(event){
        event.preventDefault();
        clearInterval(sessionInt);
        clockTitle.innerHTML = '';
        TimeRanges.innerHTML = '--;--'
    });
    
    document.getElementById('clockTitle').innerHTML = "Session";
    var sessionInt = setInterval(function(){

        seconds--;
        if (seconds == -1){
            session--;
            seconds =59;
        }
        document.getElementById("time").innerHTML = padNumber(session) + ":" + padNumber(seconds);

        if (sessions <= -1){
            document.getElementById("time").innerHTML = "Times Up";
            clearInterval(sessionInt);
            breakInterval();
        }

    },1000)
}

function breakInterval(){
    pause.addEventListener('click', function(event){
        event.preventDefault();
        clearInterval(breakInt);
    });
    refresh.addEventListener('click', function(event){
        event.preventDefault();
        seconds = 0;
    });
    stop.addEventListener('click', function(event){
        event.preventDefault();
        clearInterval(breakInt);
        clockTitle.innerHTML = '';
        time.innerHTML = '--:--';
    });
    document.getElementById('clockTitle').innerHTML = "Break";
    	breakSession -= 1;
    	var  breakInt = setInterval(function(){
    	
    		seconds--;
    		if (seconds === -1) {
    			breakSession--;
    			seconds = 59;
    		}
    		document.getElementById("time").innerHTML = padNumber(breakSession) + ":" + padNumber(seconds);
    
    		if (breakSession <= -1 ) {
    			document.getElementById("time").innerHTML = "TIMES UP!";
    			clearInterval(breakInt);
    		}
    
    	}, 1000)
}