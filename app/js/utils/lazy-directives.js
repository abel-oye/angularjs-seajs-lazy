/**
 * Created by river on 14-5-11.
 * 懒加载指令
 */

define(function (require, exports, module) {

    var $compileProvider;

    function setCompileProvider(value) {
        $compileProvider = value;
    }

    function register(directive) {
        if (!$compileProvider) {
            throw new Error("$compileProvider 没有设置!");
        }
        $compileProvider.directive.apply(null, directive);
    }

    return {
        setCompileProvider:setCompileProvider,
        register:register
    }
})
