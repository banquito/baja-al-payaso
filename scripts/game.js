var Game = function(gameElement) {
	var $game = $(gameElement)
	this.start = function() {
		var ballon1 = new Ballon(1, { property: 'width', value: 110 }, $game);
		var ballon1 = new Ballon(2, { property: 'width', value: 68 }, $game);
		var ballon1 = new Ballon(3, { property: 'height', value: 58 }, $game);
		var ballon1 = new Ballon(4, { property: 'width', value: 55 }, $game);
		var ballon1 = new Ballon(5, { property: 'width', value: 110 }, $game);
	};
}