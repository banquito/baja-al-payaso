var Ballon = function(number, drownAnimation, $game) {
    var id = 'balloon' + number;
    var $number = $('#number' + number);
    var $balloon = $('#' + id + ' img.balloon');
    var $boom = $('#' + id + ' img.boom');
    var $splash = $('#' + id + ' img.splash');
    var $container = $('#' + id);
    var $drown = $('#splash' + number);

    var init = function() {
        $balloon.css('width', '18px');
        //$number.click(expand);
        $number.click(drown);
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

    var drown = function() {
        move('#drown' + number)
            .add(drownAnimation.property, drownAnimation.value)
            .duration('1s')
            .ease('in')
            .then()
                .skew(-10)
                .duration('0.4s')
                .ease('in')
                .then()
                    .skew(10)
                    .duration('0.4s')
                    .ease('in')
                    .then()
                        .skew(-10)
                        .duration('0.4s')
                        .ease('in')
                        .then()
                            .skew(10)
                            .duration('0.4s')
                            .ease('in')
                            .then()
                                .skew(-10)
                                .duration('0.4s')
                                .ease('in')
                                .then()
                                    .skew(10)
                                    .duration('0.4s')
                                    .ease('in')
                                    .then()
                                        .sub(drownAnimation.property, drownAnimation.value)
                                        .duration('0.5s')
                                        .ease('in')
                                        .then(expand)
                                    .pop()
                                .pop()
                            .pop()
                        .pop()
                    .pop()
                .pop()
                
            .pop()
            .end();
    };

    init();
    return this;
}
