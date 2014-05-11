/**
 * Created by river on 14-5-11.
 * 懒加载控制器
 */

define(function (require, exports, module) {

    var $controllerProvider,
        $compileProvider,
        lazyDirectives = require('./lazy-directives');
    //设置控制器提供者
    function setControllerProvider(value) {
        $controllerProvider = value;
    }
    //设置编译提供者
    function setCompileProvider(value) {
        $compileProvider = value;
        lazyDirectives.setCompileProvider(value);
    }

    /**
     * 配置项
     * @param templateUrl
     * @param controllerName
     * @param directives
     * @returns {{}}
     */
    function config(templateUrl, controllerName, directives) {
        if (!$controllerProvider) {
            throw new Error("$controllerProvider 没有设置!");
        }

        var defer,
            isLoad,
            routeDefinition = {};

        routeDefinition.templateUrl = templateUrl;
        routeDefinition.controller = controllerName;
        routeDefinition.resolve = {
            delay:function ($q, $rootScope) {
                defer = $q.defer();
                //是否已加载过了
                if (!isLoad) {

                    var dependencies = [controllerName];
                    //添加指令
                    if (directives) {
                        dependencies = dependencies.concat(directives);
                    }
                    seajs.use(dependencies, function () {
                        var controller = arguments[0];

                        for (var i = 1; i < arguments.length; i++) {
                            lazyDirectives.register(arguments[i]);
                        }

                        $controllerProvider.register(controllerName, controller);
                        defer.resolve();
                        $rootScope.$apply();
                        isLoad = true;
                    });

                } else {
                    defer.resolve();
                }
                return defer.promise;
            }
        }
        return routeDefinition;
    }

    return {
        setControllerProvider:setControllerProvider,
        setCompileProvider:setCompileProvider,
        config:config
    }
})


