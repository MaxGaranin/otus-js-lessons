var Dep = {
    target: null
};

function defineReactive (obj, key, val) {
    var deps = [];

    Object.defineProperty (obj, key, {
        get: function () {
            if (Dep.target && deps.indexOf(Dep.target) == -1) {
                deps.push(Dep.target);
            }
            return val;
        },
        set: function (newValue) {
            val = newValue;

            deps.forEach((changeFunction) => {
               changeFunction();
            });
        }
    })
};

//----------------------------------------------

function defineComputed (obj, key, computeFunc, updateCallback) {
    var onDependencyUpdated = function() {
        var value = computeFunc();
        updateCallback(value);
    }

    Object.defineProperty (obj, key, {
        get: function () {
            Dep.target = onDependencyUpdated;
            var value = computeFunc();
            Dep.target = null;
            return value;
        },
        set: function () {
            // don't do anything. can't set computed funcs
        }
    })
}

//----------------------------------------------

// create an object
var person = {};

// add a reactive property called 'age' and 'country'
defineReactive (person, 'age', 25);
defineReactive (person, 'country', 'Brazil');

defineComputed (
    person, // the object to create computed property on
    'status', // the name of the computed property
    function () { // the function which actually computes the property
        console.log ("status getter called")
        if (person.age < 18) {
            return 'minor';
        }
        else {
            return 'adult';
        }
    },
    function (newValue) {
        // called when the computed value is updated
        console.log ("status has changed to", newValue)
    }
);

console.log ("Current age is: ", person.age);
console.log ("Current status is: ", person.status);

console.log ("Changing age");
person.age = 15;

console.log ("Changing country");
person.country = "Russia";
