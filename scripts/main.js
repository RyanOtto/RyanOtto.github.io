$(document).ready(function() {
	$('#wrapper').fadeIn(2000);
	
	// Dynamic text - click will change content and lead into more dynamic text
	$('#intro1').click( function() { $('#intro1').text("site, which I made to practice using jQuery, an open-source library for "); });
	$('#intro1').click( function() { $('#intro1').css("color","black"); });
	$('#intro1').click( function() { $('#intro2').css("display", "initial"); });
	
	$('#intro2').click( function() { $('#intro2').text("JavaScript, a language that is ironically nothing like Java."); });
	$('#intro2').click( function() { $('#intro2').css("color","black"); });
	$('#intro2').click( function() { $('#intro2').css("color","black"); });
	$('#intro2').click( function() { $('#aboutMe1').css("padding-bottom","20px"); });


	$('#intro3').click( function() { $('#intro3').text("site, where I use jQuery to practice my"); });
	$('#intro3').click( function() { $('#intro3').css("color","black"); });
	
});