$(document).ready(function() {
	var img = document.getElementById('background');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

	 document.getElementById("player").addEventListener("DOMAttrModified", function(){
	 	$('#coordinates').text(($('#player').css('left')) + ' ' + ($('#player').css('top')));
	 });

	$('#course').click(function(e) { 
		//$('#coordinates').text( e.pageY + ', ' + e.pageX ); 
		$(function(){ 
			$('#player').animate({ left:e.pageX,top:e.pageY}, 
				function(){
					var pixelData = canvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
					if(pixelData[0]==0 && pixelData[1]==0 && pixelData[2]==0) alert("You lose!");
			});
		});
	});


});