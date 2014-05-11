/**
 * Created by river on 14-5-11.
 */

'use strict';

define(function (require, exports, module) {
    return ['appVersion', function () {
        return function (scope, elm, attrs) {
            console.log(elm)
            elm.text("1.0.0");
        }
    }]
})