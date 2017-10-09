 $(document).ready(function() {
	$('#wrapper').fadeIn(2000);
	$('.ui-dialog').css("display","none");

	//A game of tic tac toe
	var playerGoing=0;
	var numTurns=0;

	$('td').click(function(event) {
		if($(this).hasClass('unfilled')){ //If the spot is empty, let the player fill it in (player 1==X, player 2==O)
			if(playerGoing==0){ playerGoing=1; $(this).addClass('filledOne'); $(this).text('X'); }
			else{ playerGoing=0; $(this).addClass('filledTwo'); $(this).text('O'); }
			numTurns++; 
		}
		//Check to see if someone won, and if so, alert and reset (maybe have the OK button be "reset")
		//if 1==2==3 || 4==5==6 || 7==8==9 || 1==5==9 || 3==5==7 || 1==4==7 || 2==5==8 || 3==6==9
		if(
			  $('#1').attr('class') == $('#2').attr('class') && $('#2').attr('class') == $('#3').attr('class') && $('#3').attr('class') != 'unfilled'
			||$('#4').attr('class') == $('#5').attr('class') && $('#5').attr('class') == $('#6').attr('class') && $('#6').attr('class') != 'unfilled'
			||$('#7').attr('class') == $('#8').attr('class') && $('#8').attr('class') == $('#9').attr('class') && $('#9').attr('class') != 'unfilled'
			||$('#1').attr('class') == $('#5').attr('class') && $('#5').attr('class') == $('#9').attr('class') && $('#9').attr('class') != 'unfilled'
			||$('#3').attr('class') == $('#5').attr('class') && $('#5').attr('class') == $('#7').attr('class') && $('#7').attr('class') != 'unfilled'
			||$('#1').attr('class') == $('#4').attr('class') && $('#4').attr('class') == $('#7').attr('class') && $('#7').attr('class') != 'unfilled'
			||$('#2').attr('class') == $('#5').attr('class') && $('#5').attr('class') == $('#8').attr('class') && $('#8').attr('class') != 'unfilled'
			||$('#3').attr('class') == $('#6').attr('class') && $('#6').attr('class') == $('#9').attr('class') && $('#9').attr('class') != 'unfilled'
		){ 			
			//Alert the players of game results
		 	$('#dialog').dialog();
		 	$('#dialog').css('text-align','center');
		 	$('#dialog').text('Player ' + (playerGoing==0 ? 'Two':'One') + ' has won!');

		 	//Reset the board and game state
		 	$('.filledOne').addClass('unfilled'); $('.filledOne').removeClass('filledOne');
		 	$('.filledTwo').addClass('unfilled'); $('.filledTwo').removeClass('filledTwo');
		 	$('.unfilled').html('&nbsp;')
		 	numTurns=0;
		 	playerGoing=0;
		}
		else if(numTurns==9) alert('Tie!');
	});
});