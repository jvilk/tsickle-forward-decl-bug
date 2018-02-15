goog.module('build.bar');var module = module || {id: 'build/bar.js'};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var foo_1 = goog.require('build.foo');
var tsickle_forward_declare_1 = goog.forwardDeclare("src.foo");
exports.a = 3;
/**
 * @return {number}
 */
function Bar() {
    return foo_1.default();
}
exports.default = Bar;
