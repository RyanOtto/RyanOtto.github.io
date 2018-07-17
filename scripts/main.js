$(document).ready(function() {
$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
        anchors: ['Work in Progress', 'About Me', 'My Projects', 'Apps'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 800,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: true,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: true,
		scrollOverflowReset: true,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
        sectionsColor: ['#8b687f', '#c6caed', '#be6e46', '#578de5', '#8eb6ff', '#e8eef9' ],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	//Puns
	var punString, punStringArr, whichPun;

	$.get('resources/puns.txt', function(data) {
		 punString=data;
		 punStringArr=punString.split("\n");
		newPun();
	}, 'text');


	function newPun(){
		var whichPun = Math.floor((Math.random() * punStringArr.length)); 
		$('#pun').fadeTo('3000', 0, function() {
			$('#pun').text(punStringArr[whichPun]);
		});
		$('#pun').fadeTo('3000', 1);
	}

	  setInterval( newPun, 5000);

	//Tic Tac Toe
	$('.ui-dialog').css("display","none");
	var playerGoing=0;
	var numTurns=0;

	$('td').click(function(event) {
		if($(this).is('.unfilled')){ //If the spot is empty, let the player fill it in (player 1==X, player 2==O)
			if(playerGoing==0){ playerGoing=1; $(this).removeClass('unfilled'); $(this).addClass('filledOne'); $(this).text('X'); }
			else{ playerGoing=0; $(this).removeClass('unfilled'); $(this).addClass('filledTwo'); $(this).text('O'); }
			numTurns++; 
		}
		//Check to see if someone won
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
			//Alert of game results
		 	$('#dialog').text('Player ' + (playerGoing==0 ? 'Two':'One') + ' has won!');
		 	reset();

		}
		else if(numTurns==9){ 
			$('#dialog').text('Tie!'); 
			reset();
		}
	});


	function reset(){
			//Alert of game results
			$('#dialog').dialog();
		 	$('#dialog').css('text-align','center');

			//Reset the board and game state
		 	$('.filledOne').addClass('unfilled'); $('.filledOne').removeClass('filledOne');
		 	$('.filledTwo').addClass('unfilled'); $('.filledTwo').removeClass('filledTwo');
		 	$('.unfilled').html('&nbsp;')
		 	numTurns=0;
		 	playerGoing=0;
	}

});