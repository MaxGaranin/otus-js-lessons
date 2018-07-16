
function AgeError(message) {
    this.name = "AgeError";
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
}

AgeError.prototype = Object.create(Error.prototype);
AgeError.prototype.constructor = AgeError;


function CheckIn(user) {
    if (user.age < 18) throw new AgeError('Надо подрасти!');
    //......
}

var vasya = {
    name : "Вася",
    age : 15
}

// Сначала ловим через try-catch
try {
    // throw new Error("Что-то пошло не так");
    CheckIn(vasya);
} catch (e) {
    if (e instanceof AgeError) {
        console.log(e.message);
    }
    else {
        console.error(`Ошибка: ${e.name}\nCообщение: ${e.message}\nCтек: ${e.stack}`);
    }
}

// А теперь через uncaughtException
process.on('uncaughtException', function(e) {
    console.error(`Непредвиденная ошибка: ${e.name}\nCообщение: ${e.message}\nCтек: ${e.stack}`);
    process.exit();
});

CheckIn(vasya);