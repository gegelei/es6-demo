var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function (subject) {
        console.log("hello " + subject + "!");
    };
    __decorate([
        logSuccess
    ], Greeter.prototype, "greet", null);
    return Greeter;
}());
// Typescript中的装饰器是一项实验性功能，需要在tsconfig.json中开启该特性
/*
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
 */
function logSuccess(target, key, descriptor) {
    var func = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('greet start');
        func.apply(target, args);
        console.log('greet successfully');
    };
}
var greeter = new Greeter();
greeter.greet("dahai");
