//Puns
$(document).ready(function() {
	
	$.get('resources/puns.txt', function(data) {
		var punString=data;
		var punStringArr=punString.split("\n");
		var whichPun = Math.floor((Math.random() * punStringArr.length)); 
	   	$('#pun-container').text(punStringArr[whichPun]);
	}, 'text');

});
