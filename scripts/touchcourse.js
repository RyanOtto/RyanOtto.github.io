$(document).ready(function() {

	$('#player').css({left:375,top:275});
	var img = document.getElementById('background');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

	 $("#player").on("DOMAttrModified", function(e){
	 	$('#coordinates').text(($('#player').css('left')) + ' ' + ($('#player').css('top')));
	 	var left = ($('#player').css('left'));
	 	var top = ($('#player').css('top'))
	 	var pixelData = canvas.getContext('2d').getImageData(parseInt(left), parseInt(top), 1, 1).data;
	 	//alert(pixelData);
	 	console.log(pixelData[0] + ' ' + pixelData[1] + ' ' + pixelData[2]);
		if(pixelData[0]==0 && pixelData[1]==0 && pixelData[2]==0) console.log("You lose!" + pixelData[0] + ' ' + pixelData[1] + ' ' + pixelData[2]);
	 });

	$('#course').click(function(e) { 
		//$('#coordinates').text( e.pageY + ', ' + e.pageX ); 
		$(function(){ 
			$('#player').animate({ left:e.pageX,top:e.pageY}); 
		});
	});


});