var Ballon = function($game) {
    var id = 'balloon1';
    var $balloon = $('<img src="images/balloon1.png" class="balloon">');
    var $boom = $('<img src="images/boom1.png" class="boom">');
    var $splash = $('<img src="images/splash_balloon.png" class="splash">');
    var $container = $('<div id="' + id + '"></div>');
    $container.append($balloon);
    $container.append($splash);
    $container.append($boom);


    var splash = function() {
        $balloon.hide();
        $splash.fadeIn('fast', boom);
    }

    var boom = function() {
        $boom.fadeIn('fast', function() {
			move('#' + id + ' img.boom')
        		.scale(1.5)
        		.end(hide);
        });
    };

    var hide = function() {
		//$splash.fadeOut('fast', function() {
			$splash.fadeOut('fast');
			$boom.fadeOut('fast');
		//});
    };

    var expand = function() {
        move('#' + id + ' img.balloon')
        .scale(4)
        .end(splash);
    };

    this.draw = function(x, y) {
        $container.css('left', x + 'px');
        $container.css('top', y + 'px');
        $balloon.css('width', '10%');
        $balloon.click(expand);
        $game.append($container);
    };
}
