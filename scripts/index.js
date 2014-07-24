$(function() {
    var welcome = new Welcome();
    welcome.start();
    
    $('#welcome').click(function(){
    	$('#welcome').hide();
    	$('#game').show();
    	window.setTimeout(function() {
    		var game = new Game();
    		game.start();
    	}, 100);
    });
});