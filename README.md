baja-al-payaso
==============

This apps is build on top of [jquery] and [move.js], a CSS3 backed JavaScript animation framework. Folowing keep it simple design principle we resolve most of rendering just using html5 and css3.

And because of DRY principle we use [stylus] for generating css and solve automatically some browser compliants.

Few javascript classes allow to reduce code complexity and easy maintain, thanks to [srp] (single responsibility principle).

And that is all!

Install
-------


```
$ bower update
$ stylus -c styles/game.styl
```

Browser compatibility
-------

- with Chrome and FF
- with IE > 10

To do
-------
- remove opacity aninamtion for IE 9 compatibility
- create a special version for  IE 8

[jquery]:http://jquery.com/
[move.js]:http://visionmedia.github.io/move.js/
[stylus]:http://learnboost.github.io/stylus/
[srp]:http://blog.8thlight.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html
