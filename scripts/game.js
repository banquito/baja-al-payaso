var Game = function(gameElement) {
	var $game = $(gameElement)
	
	var moveBalloons = function() {
		var duration = '0.3s'
		move('#balloons')
			.duration(duration)
			.ease('out')
  			.translate(20, 40)
  			.then()
  				.duration(duration)
  				.ease('out')
  				.translate(-20, 40)
  				.then()
	  				.duration(duration)
	  				.ease('out')
	  				.translate(20, 20)
	  				.then()
		  				.duration(duration)
		  				.ease('out')
		  				.translate(-20, 14)
		  			.pop()
	  			.pop()
  			.pop()
  			.end();
          
	};

	var moveClowns = function(end) {
		move('#clowns')
			.add('bottom', 250)
			.then()
				.sub('bottom', 10)
				.then()
					.add('bottom', 10)
					.then(end)
				.pop()
			.pop()
			.end();
	};

	var showNumbers = function() {
		var duration = 300;
		$('#number1').fadeIn(duration, function() {
			$('#number2').fadeIn(duration, function() {
				$('#number3').fadeIn(duration, function() {
					$('#number4').fadeIn(duration, function() {
						$('#number5').fadeIn(duration);
					});
				});
			});
		});
	};

	this.start = function() {
		var ballon1 = new Ballon(1, { property: 'width', value: 110 }, $game);
		var ballon1 = new Ballon(2, { property: 'width', value: 68 }, $game);
		var ballon1 = new Ballon(3, { property: 'height', value: 58 }, $game);
		var ballon1 = new Ballon(4, { property: 'width', value: 55 }, $game);
		var ballon1 = new Ballon(5, { property: 'width', value: 110 }, $game);

		moveBalloons();
		moveClowns(showNumbers);
	};
}