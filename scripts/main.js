$(document).ready(function() {

	// Dynamic text
	$('#intro1').click( function() { $('#intro1').text("site, which I made to practice using jQuery, an open-source library for "); });
	$('#intro1').click( function() { $('#intro1').css("color","black"); });
	$('#intro1').click( function() { $('#intro2').css("display", "initial"); });
	
	$('#intro2').click( function() { $('#intro2').text("JavaScript, a language that is ironically nothing like Java."); });
	$('#intro2').click( function() { $('#intro2').css("color","black"); });
	$('#intro2').click( function() { $('#intro2').css("color","black"); });
	
	//Accordion
	$(function() { $( "#accordion" ).accordion({ collapsible:true, heightStyle:"content" }); });
	
});