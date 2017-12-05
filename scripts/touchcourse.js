$(document).ready(function() {

//Observer to track player movement
var target = document.getElementById('player');
var observer = new MutationObserver(function(mutations) {
 mutations.forEach(function(mutation) {
   if(mutation.type == 'attributes');
   	track();
 });    
});
var config = { attributes: true, childList: true, characterData: true };
observer.observe(target, config);


	$('#player').css({left:0,top:0});
	var img = document.getElementById('background');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

	 function track(e){
	 	var left = ($('#player').css('left'));
	 	var top = ($('#player').css('top'));
	 	var pixelData = canvas.getContext('2d').getImageData(parseFloat(left), parseFloat(top), 1, 1).data;
	 	console.log(pixelData[0] + ' ' + pixelData[1] + ' ' + pixelData[2]);
		if(pixelData[0]==195 && pixelData[1]==195 && pixelData[2]==195) console.log("You lose!" + pixelData[0] + ' ' + pixelData[1] + ' ' + pixelData[2]);
	 }

	$('#course').click(function(e) { 
		$(function(){ 
			$('#player').animate({ left:e.pageX,top:e.pageY}); 
		});
	});


});