/**
 * Created by river on 14-5-11.
 */

'use strict';

define(function (require, exports, module) {
    var routeConfig = require('../utils/route-config');
    var init = function(app){
        app.config(function ($routeProvider) {
            $routeProvider.when('/view1', routeConfig.config('./views/view1.html', './js/controllers/first'));
            $routeProvider.when('/view2', routeConfig.config('./views/view2.html', './js/controllers/second', ['./js/directives/version']));

            $routeProvider.otherwise({redirectTo:'/view1'});
        });
    }

    return {
        init:init
    };
});
