var Game = function(gameElement) {
	var $game = $(gameElement)
	this.start = function() {
		var ballon1 = new Ballon(1, $game).draw(100,100);
		var ballon1 = new Ballon(2, $game).draw(200,100);
		var ballon1 = new Ballon(3, $game).draw(300,100);
		var ballon1 = new Ballon(4, $game).draw(400,100);
		var ballon1 = new Ballon(5, $game).draw(500,100);
	};
}