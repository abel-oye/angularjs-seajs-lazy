/**
 * Created by river on 14-5-11.
 */
'use strict';
define(function(require, exports, module){

    var myApp =  angular.module('myApp', [], function ($compileProvider, $controllerProvider) {
        var routeConfig = require('./utils/route-config');
        routeConfig.setCompileProvider($compileProvider);
        routeConfig.setControllerProvider($controllerProvider);
    });
    var routeConfig = require('./route/route');
    routeConfig.init(myApp);
});