$(document).ready(function() {
	$('#wrapper').fadeIn(2000);
	
	// Dynamic text - click will change content and lead into more dynamic text
	$('#intro1').click( function() { $('#intro1').text("site, which I made to practice using jQuery, an open-source library for "); });
	$('#intro1').click( function() { $('#intro1').css("color","black"); });
	$('#intro1').click( function() { $('#intro2').css("display", "initial"); });
	
	$('#intro2').click( function() { $('#intro2').text("JavaScript, a language that is ironically nothing like Java."); });
	$('#intro2').click( function() { $('#intro2').css("color","black"); });
	$('#intro2').click( function() { $('#intro2').css("color","black"); });
	
	//Accordion
	var icons = { header: "ui-icon-circle-arrow-e", activeHeader: "ui-icon-circle-arrow-s" };
	$(function() { $( "#accordion" ).accordion({ collapsible: true, height:fill, icons: icons }); });

});