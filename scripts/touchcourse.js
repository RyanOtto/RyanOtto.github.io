$(document).ready(function() {

	var img = document.getElementById('background');
	var canvas = document.createElement('canvas');
	var timer = 60;
	var	timerInterval = setInterval( countdown, 1000 );
	var score = 0;
	var level = 1;
	level = localStorage.getItem('levelNumber');
	score = localStorage.getItem('score');
	//var waitingForLevelChange = false;
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
			//alert("You lose!");
			playerLoses();
		}
		else if(pixelData[0]==0 && pixelData[1]==162 && pixelData[2]==232
		|| pixelData2[0]==0 && pixelData2[1]==162 && pixelData2[2]==232
		|| pixelData3[0]==0 && pixelData3[1]==162 && pixelData3[2]==232
		|| pixelData4[0]==0 && pixelData4[1]==162 && pixelData4[2]==232){ 
			//if(!waitingForLevelChange){ 
				nextLevel(); 
				//waitingForLevelChange = true;
			//}
		}
	 }

	$('#course').click(function(e) { 
		$(function(){ 
			var playerWidth = $('#player').width();
			var playerHeight = $('#player').height();
			$('#player').animate({ left:e.pageX-playerWidth/2,top:e.pageY-playerHeight/2}); 
		});
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
		//clearInterval(myInterval);
		level++;
		loadLevel();
		score += timer;
		timer = 60;
		localStorage.setItem('levelNumber', level);
		localStorage.setItem('score', score);
		$('#player').stop();
    	$('#player').css({left:0,top:0});
		//waitingForLevelChange = false;
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
		$('#background').attr('src','img/TouchCourse/level'+level+'.png');	
		$('#player').css({left:0,top:0});
		canvas.width = img.width;
		canvas.height = img.height;
		canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
	}

	function drawUI(){
		$('#timer').text('Timer: ' + parseInt(timer) + ' seconds');
		$('#score').text('Score: ' + parseInt(score));
		$('#level').text('Level: ' + parseInt(level));
	}

});