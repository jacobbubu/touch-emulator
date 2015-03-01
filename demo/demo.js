"use strict";

require('../index')();
var on = require('dom-event');
var debugLabel = require('debug-label');
var label = debugLabel();
label.style.right = 0;
label.cell.style.textAlign = 'center';
label.cell.style.color = 'MistyRose';

var printEvent = function(evt) {
    if (evt.touches[0])
        label.info(evt.type, 'at', evt.touches[0].screenX, evt.touches[0].screenY);
    else
        label.info(evt.type);
}
on(window, 'touchstart', printEvent);
on(window, 'touchend', printEvent);
on(window, 'touchmove', printEvent);
on(window, 'touchcancel', printEvent);