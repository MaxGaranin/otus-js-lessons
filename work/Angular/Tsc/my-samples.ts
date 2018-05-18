
class MyClass {
    @log
    run() { }
}

function log(target, key, descriptor) {
    console.log(target, key)
}

new MyClass().run();