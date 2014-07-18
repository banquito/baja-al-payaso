var Ballon = function(number, $game) {
    var id = 'balloon' + number;
    var $number = $('#number' + number);
    var $balloon = $('#' + id + ' img.balloon');
    var $boom = $('#' + id + ' img.boom');
    var $splash = $('#' + id + ' img.splash');
    var $container = $('#' + id);
    
    var init = function() {
        $balloon.css('width', '18px');
        $number.click(expand);
    }
    
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

    init();
    return this;
}
