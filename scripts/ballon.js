var Ballon = function($game) {
    var id = 'balloon1';
    var $balloon = $('<img src="images/balloon1.png" class="balloon">');
    var $boom = $('<img src="images/boom1.png" class="boom">');
    var $splash = $('<img src="images/splash_balloon.png" class="splash">');
    var $container = $('<div id="' + id + '"></div>');
    $container.append($balloon);
    $container.append($splash);
    $container.append($boom);


    var boom = function() {
        $balloon.hide();
        
        $splash.fadeIn('fast');

        $boom.fadeIn('fast', function() {
			move('#' + id + ' img.boom')
        		.scale(1.2)
        		.end(hide);
        });
    };

    var hide = function() {
    	$splash.fadeOut('fast');
		$boom.fadeOut('slow');
    };

    var expand = function() {
        move('#' + id + ' img.balloon')
        .scale(4)
        .end(boom);
    };

    this.draw = function(x, y) {
        $container.css('left', x + 'px');
        $container.css('top', y + 'px');
        $balloon.css('width', '18px');
        $balloon.click(expand);
        $game.append($container);
    };
}
