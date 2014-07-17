var Game = function(gameElement) {
	var $game = $(gameElement)
	this.start = function() {
		var ballon1 = new Ballon($game);
		ballon1.draw(100,100);
	};
}