class Greeter {
    constructor() {
    }

    @logSuccess
    greet(subject: any) {
        console.log(`hello ${subject}!`);

    }
}

// Typescript中的装饰器是一项实验性功能，需要在tsconfig.json中开启该特性
/*
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
 */
function logSuccess(target: any, key: any, descriptor: any) {
    const func = descriptor.value;
    descriptor.value = (...args: any[]) => {
        console.log('greet start');
        func.apply(target, args);
        console.log('greet successfully')
    }
}

const greeter = new Greeter();
greeter.greet(`dahai`);

