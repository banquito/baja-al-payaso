var Welcome = function() {

	var ligthBackground = function() {
		move('#background')
		  	.duration('1s')
		  	.set('opacity', 0)
		  	.end();
	}

	var moveBalloons = function() {
		return new Promise(function() {
			move('#flight-balloons')
			  	.duration('1s')
			  	.ease('in-out')
			  	.translate(0, -420)
			  	.then()
			  		.duration('1s')
			  		.ease('in-out')
			  		.translate(0, 50)
			  		.then(showPrize)
			  	.pop()
			  	.end();
		});
	}

	var showPrize = function() {
		$('#prize').fadeIn('fast', function() {
			move('#prize')
				.scale(1)
				.end(showSplash);
		});
	};

	var showSplash = function() {
		$('#splash').fadeIn(function() {
			showRibbon();
		});
	}

	var showRibbon = function() {
		$('#ribbon-back').fadeIn(function() {
			move('#ribbon1')
            	.add('width', 209)
            	.duration('0.5s')
            	.ease('in')
            	.end();
            move('#ribbon2')
            	.add('width', 209)
            	.duration('0.5s')
            	.ease('in')
            	.end(showWelcome);
		});
	};

	var showWelcome = function() {
		window.setTimeout(function() {
    		$('#welcome-you').fadeIn();
    	}, 1000);
	};

	this.start = function() {
		ligthBackground();
		moveBalloons();
	};

}