// --- Configuration Starts ---

// Put Your Website URL here.
var theUrl = 'http://sabuj.me';

// Put Your query selector here.
// To Save The Whole Document Put "--doc--"
var theQuerySelector = "--doc--";

// Put Your Desigred Display Resolution Here.
var displayWidth = 1920;

// No Need Of Height - That Would Just Limit The Page View, Let It Flow.

// --- Configuration Ends ----


var page = require('webpage').create();
page.viewportSize = {width: displayWidth};

page.onConsoleMessage = function(msg){
    console.log("Page Says: " + msg + "\n");
};
page.open(theUrl, function() {
    if (theQuerySelector!="--doc--"){
        var clipRectO = page.evaluate(function(theQuery){
                var theQuery = theQuery;
            
                var v1 = document.querySelectorAll(theQuery);
                var arr = [];
                for (var i = 0; i < v1.length; i++){
                    var e = v1[i].getBoundingClientRect();
                    arr.push({top: e.top, left: e.left, width: e.width, height: e.height});
                }
                return    {arr:arr} ;
            }, theQuerySelector);
            
        for(var i2=0; i2< clipRectO.arr.length; i2++){
            var clipRect = clipRectO.arr[i2];
            page.clipRect = {
                top:    clipRect.top,
                left:   clipRect.left,
                width:  clipRect.width,
                height: clipRect.height
            };
            
            page.render('clip' + i2 + '.png', {format: 'png', quality: '100'});
        }
    }
    else{
        page.render('page.pdf', {format: 'pdf', quality: '100'});
    }
  phantom.exit();
});