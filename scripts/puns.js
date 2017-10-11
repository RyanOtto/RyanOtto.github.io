//Puns
$(document).ready(function() {
	var punString, punStringArr, whichPun;

	$.get('resources/puns.txt', function(data) {
		 punString=data;
		 punStringArr=punString.split("\n");
		newPun();
	}, 'text');

	$('#pun-button').click(function(){ 
		newPun(); 
	});

	function newPun(){
		var whichPun = Math.floor((Math.random() * punStringArr.length)); 
	   	$('#pun').text(punStringArr[whichPun]);
	}

});
