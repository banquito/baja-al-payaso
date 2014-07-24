var Welcome = function() {
	
	var ligthBackground = function() {
		move('#background')
		  	.duration('1s')
		  	.set('opacity', 0)
		  	.end();
	}

	var moveBalloons = function(next) {
		move('#flight-balloons')
		  	.duration('1s')
		  	.ease('in-out')
		  	.translate(0, -420)
		  	.then()
		  		.duration('1s')
		  		.ease('in-out')
		  		.translate(0, 50)
		  		.then(next)
		  	.pop()
		  	.end();
	}

	var showPrize = function(next) {
		return function() {
			$('#prize').fadeIn('fast', function() {
				move('#prize')
					.scale(1)
					.end(next);
			});
		}
	};

	var showSplash = function() {
		$('#splash').fadeIn(function() {
			showRibbon();
		});
	}

	var showRibbon = function() {
		$('#ribbon-back').fadeIn(function() {
			console.log('hola');
			move('#ribbon1')
            	.add('width', 209)
            	.duration('0.5s')
            	.ease('in')
            	.end();
            move('#ribbon2')
            	.add('width', 209)
            	.duration('0.5s')
            	.ease('in')
            	.end();
		});
	};

	this.start = function() {
		ligthBackground();
		moveBalloons(showPrize(showSplash));
	};
}