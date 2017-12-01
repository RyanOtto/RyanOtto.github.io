$(document).ready(function() {

	$('#course').click(function(e) { 
		$('#coordinates').text( e.pageY + ', ' + e.pageX ); 
		$('#player').css({ left:e.pageX,top:e.pageY} );
	});


});