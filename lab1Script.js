	//grab both numbers, add them up, and display them

	var countdownTimer;
	var score;
	var answers = ["Start of Something New", "Breaking Free", "When There Was Me and You", "Everyday", "What I've Been Looking For"];

	function checkAnswers(val){
		var i;
	
		for (i=0; i<answers.length; i++){
			if (val == answers[i]){
				ansTag = document.getElementById("num"+i);
				if(ansTag.innerHTML == "" || ansTag.innerHTML == null){
					score = score+1;
					ansTag.innerHTML = val;
					scoreTag = document.getElementById("score");
					scoreTag.innerHTML = "Score: "+score;
				}
				break;
			}
		}
		
		/*var ans1 = document.getElementById("num1").value;
		var ans2 = document.getElementById("num2").value;
		var ans3 = document.getElementById("num3").value;
		var divTag = document.getElementById('output');
		if (ans1=="Start of Something New"){
			count+=1;
			
		}
		if (ans2=="Breaking Free"){
			count+=1;

		}
		if (ans3=="When There Was Me and You"){
			count+=1;

		}
		if (ans4=="Everyday"){
			count+=1;

		}
		alert("Score: "+ count);*/
	
	}
	var seconds = 60;
	function secondPassed() {
		
    	var minutes = Math.round((seconds - 30)/60);
    	var remainingSeconds = seconds % 60;
    	if (remainingSeconds < 10) {
        	remainingSeconds = "0" + remainingSeconds;  
    	}
    	document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
   		if (seconds == 0) {
        	clearInterval(countdownTimer);
        	document.getElementById('countdown').innerHTML = "Time is Up!";
        	var inputTag = document.getElementById("answerBox");
			inputTag.disabled = true;
    	} 
    	else {
        	seconds--;
    	}
	}

	function myStart(){
		clearInterval(countdownTimer);
	 	seconds=60;
		countdownTimer = setInterval('secondPassed()', 1000);
		var inputTag = document.getElementById("answerBox");
		inputTag.disabled = false;
		score = 0;
		var i;
		for (i=0; i<answers.length; i++){
			ansTag = document.getElementById("num"+i);
				ansTag.innerHTML = "";
		}
		scoreTag = document.getElementById("score");
		scoreTag.innerHTML = "Score: "+score;
		var startTag = document.getElementById("start");
		var pauseTag= document.getElementById("pause");
		var restartTag = document.getElementById("restart");
		var quitTag = document.getElementById("quit");
		pauseTag.disabled = false;
		restartTag.disabled = false;
		quitTag.disabled = false;
		startTag.disabled = false;
	}

	function myPause(){
		clearInterval(countdownTimer);	
		var inputTag = document.getElementById("answerBox");
		inputTag.disabled = true;
		var startTag = document.getElementById("start");
		var pauseTag= document.getElementById("pause");
		var restartTag = document.getElementById("restart");
		var quitTag = document.getElementById("quit");
		pauseTag.disabled = true;
		restartTag.disabled = false;
		quitTag.disabled = false;
		startTag.disabled = false;

	}
	function myRestart(){
	 	countdownTimer = setInterval('secondPassed()', 1000); 
	 	var inputTag = document.getElementById("answerBox");
	 	var startTag = document.getElementById("start");
		var pauseTag= document.getElementById("pause");
		var restartTag = document.getElementById("restart");
		var quitTag = document.getElementById("quit");
		inputTag.disabled = false;
		restartTag.disabled = true;
		pauseTag.disabled = false;
		quitTag.disabled = false;
		startTag.disabled = false;
	}
	function myQuit(){
		clearInterval(countdownTimer);
		var inputTag = document.getElementById("answerBox");
		var startTag = document.getElementById("start");
		var pauseTag= document.getElementById("pause");
		var restartTag = document.getElementById("restart");
		var quitTag = document.getElementById("quit");
		inputTag.disabled = true;
		quitTag.disabled = true;
		restartTag.disabled = true;
		pauseTag.disabled = true;
		startTag.disabled = false;
	}
