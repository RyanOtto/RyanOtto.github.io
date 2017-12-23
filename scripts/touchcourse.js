$(document).ready(function() {

	var img = document.getElementById('background');
	var canvas = document.createElement('canvas');
	var timer = 60;
	var	timerInterval = setInterval( countdown, 1000 );
	var	renderInterval = setInterval( render, 1 );
	var score = 0;
	var level = 1;
	var timeTaken = 0;
	var fastestTimes = [999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999];
	var highestLevel = 1;
	var highScore = 0;

	if(localStorage.getItem('levelNumber')){ level = parseInt(localStorage.getItem('levelNumber')); }
	if(localStorage.getItem('score')){ score = parseInt(localStorage.getItem('score')); }
	if(localStorage.getItem('fastestTimes')){ fastestTimes = JSON.parse(localStorage.getItem("fastestTimes")); }
	if(localStorage.getItem('highestLevel')){ highestLevel = parseInt(localStorage.getItem('levelNumber')); }
	if(localStorage.getItem('highScore')){ highScore = parseInt(localStorage.getItem('levelNumber')); }

	var target = document.getElementById('player');
	var observer = new MutationObserver(function(mutations) {
	 mutations.forEach(function(mutation) {
	   if(mutation.type == 'attributes');
	   	track();
	 });    
	});
	var config = { attributes: true, childList: true, characterData: true };
	observer.observe(target, config);

	drawUI();
	loadLevel();

	 function track(e){
	 	var left = ($('#player').css('left'));
	 	var top = ($('#player').css('top'));
	 	var pixelData = canvas.getContext('2d').getImageData(parseFloat(left)-15, parseFloat(top), 1, 1).data;
	 	var pixelData2 = canvas.getContext('2d').getImageData(parseFloat(left)+parseFloat(($('#player').css('width')))-10, parseFloat(top), 1, 1).data;
	 	var pixelData3 = canvas.getContext('2d').getImageData(parseFloat(left)+parseFloat(($('#player').css('width')))-10, parseFloat(top)+parseFloat(($('#player').css('height')))-15, 1, 1).data;
	 	var pixelData4 = canvas.getContext('2d').getImageData(parseFloat(left)-15, parseFloat(top)+parseFloat(($('#player').css('height')))-15, 1, 1).data;
	 	
	 	console.log(pixelData[0] + ' ' + pixelData[1] + ' ' + pixelData[2]);

		if(pixelData[0]>190 && pixelData[0]<200 && pixelData[1]>190 && pixelData[1]<200 && pixelData[2]>190 && pixelData[2]<200 
		|| pixelData2[0]>190 && pixelData2[0]<200 && pixelData2[1]>190 && pixelData2[1]<200 && pixelData2[2]>190 && pixelData2[2]<200 
		|| pixelData3[0]>190 && pixelData3[0]<200 && pixelData3[1]>190 && pixelData3[1]<200 && pixelData3[2]>190 && pixelData3[2]<200 
		|| pixelData4[0]>190 && pixelData4[0]<200 && pixelData4[1]>190 && pixelData4[1]<200 && pixelData4[2]>190 && pixelData4[2]<200 ){ 
			playerLoses();
		}
		else if(pixelData[0]>=0 && pixelData[0]<10 && pixelData[1]>150 && pixelData[1]<170 && pixelData[2]>230 && pixelData[2]<240
		|| pixelData2[0]>=0 && pixelData2[0]<10 && pixelData2[1]>150 && pixelData2[1]<170 && pixelData2[2]>230 && pixelData2[2]<240
		|| pixelData3[0]>=0 && pixelData3[0]<10 && pixelData3[1]>150 && pixelData3[1]<170 && pixelData3[2]>230 && pixelData3[2]<240
		|| pixelData4[0]>=0 && pixelData4[0]<10 && pixelData4[1]>150 && pixelData4[1]<170 && pixelData4[2]>230 && pixelData4[2]<240){ 
			nextLevel(); 
		}
	 }

	$('#course').click(function(e) { 
		$(function(){ 
			var playerWidth = $('#player').width();
			var playerHeight = $('#player').height();
			$('#player').animate({ left:e.pageX-playerWidth/2,top:e.pageY-playerHeight/2}); 
		});
	});

	$('#nextLevelButton').click(function(e) { 
		nextLevel();
	});

	$('#newGameButton').click(function(e) { 
		localStorage.setItem('levelNumber', 1);
		localStorage.setItem('score', 0);
		level = 1;
		score = 0;
		timer = 60;
		loadLevel();
		drawUI();
	});

	function nextLevel(){
		level++;
		score += timer;
		timeTaken = 60-timer;
		if(typeof fastestTimes[level-1] === 'undefined'){
			fastestTimes[level-1] = timeTaken;
			alert(fastestTimes[level-1]);
			localStorage.setItem('fastestTimes', JSON.stringify(fastestTimes));
		}
		if(timeTaken < fastestTimes[level-1]){
			fastestTimes[level-1] = timeTaken;
			localStorage.setItem('fastestTimes', JSON.stringify(fastestTimes));
		}
		if(level > highestLevel){
			highestLevel = level;
			localStorage.setItem('highestLevel', level);
		}
		if(score > highScore){
			highScore = score;
			localStorage.setItem('highScore', highScore);
		}
		loadLevel();
		timer = 60;
		localStorage.setItem('levelNumber', level);
		localStorage.setItem('score', score);
		$('#player').stop();
    	$('#player').css({left:0,top:0});
		drawUI();
	}

	function playerLoses(){
		$('#player').stop();
		$('#player').css({left:0,top:0});
		timer = 60;
		drawUI();
	}

	function countdown(){
		timer--;
		if(timer <= 0){ playerLoses(); }
		drawUI();
	}

	function loadLevel(){
		$('#player').css({left:0,top:0});
	}

	function drawUI(){
		$('#timer').text('Timer: ' + parseInt(timer) + 's');
		$('#score').text('Score: ' + parseInt(score));
		$('#level').text('Level: ' + parseInt(level));
		$('#highestLevel').text('Highest Level: ' + parseInt(highestLevel));
		$('#fastestTimes').text(fastestTimes[level] == 999? 'Quickest time this level: N/A':'Quickest time this level: ' + fastestTimes[level] + 's');
		$('#highScore').text('Highest Score: ' + parseInt(highScore));
	}

	function render(){
		$('#background').attr('src','img/TouchCourse/level'+level+'.png');	
		img = document.getElementById('background');
		ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		canvas.width = img.width;
		canvas.height = img.height;
		ctx.drawImage(img, 0, 0, img.width, img.height);
	}

});