var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (subject) {
        console.log('hello ${subject}!');
    };
    return Greeter;
}());
function logSuccess(target, key, descriptor) {
    var func = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // console.log('greet start')
        func.apply(target, args);
        console.log('greet successfully');
    };
}
var greeter = new Greeter();
greeter.greet("dahai");
