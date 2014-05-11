/**
 * Created by river on 14-5-11.
 */
'use strict';
seajs.config({
    baseUrl:'js',
    alias: {
        'angular': './lib/angular/angular'
    },
    charset: 'utf-8',
    timeout: 20000,
    debug: false
});

define(function(require, exports, module){
    require('angular');
    require('./app');
});