goog.module('build.foo');var module = module || {id: 'build/foo.js'};

var bar_1 = goog.require('build.bar');
function foo() {
    return bar_1.a;
}
exports.default = foo;
