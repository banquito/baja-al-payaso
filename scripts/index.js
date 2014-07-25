$(function() {
    var welcome = new Welcome();
    
    var goToBye = function() {
        var bye = new Bye();
        bye.start();
    };

    var goToGame = function(){
        var game = new Game();
        game.start();
        game.click(goToBye)
    };

    welcome.start();
    welcome.click(goToGame);        
});