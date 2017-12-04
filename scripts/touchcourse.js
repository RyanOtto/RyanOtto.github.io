$(document).ready(function() {
	var img = document.getElementById('background');
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);

	$('#course').click(function(e) { 
		$('#coordinates').text( e.pageY + ', ' + e.pageX ); 
		$(function(){ 
			$('#player').animate({ left:e.pageX,top:e.pageY}, 
				function(){
					var pixelData = canvas.getContext('2d').getImageData(e.offsetX, e.offsetY, 1, 1).data;
					alert(pixelData);
			});
		});
	});

	
});