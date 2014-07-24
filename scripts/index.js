$(function() {
    var welcome = new Welcome();
    welcome.start();
    
    $('#welcome').click(function(){
    	$('#welcome').fadeOut(function() {
    		$('#game').fadeIn();
	    	window.setTimeout(function() {
	    		var game = new Game();
	    		game.start();
	    	}, 100);
    	});
    });
});