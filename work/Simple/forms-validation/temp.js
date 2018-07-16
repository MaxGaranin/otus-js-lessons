
document.addEventListener("DOMContentLoaded", ready);

function ready() {
    console.log('----------- onload');
    var input1 = document.getElementById('input1');
    input1.onchange = function () {
        console.log('-----------');
        console.log(input1.validity);
    }

    // On click of form submit buttons
    submit.addEventListener('click', function (e) {
        let inputs = document.getElementsByTagName('input');
        let stopSubmit = false;

        // Loop through all inputs
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];

            // Use native JavaScript checkValidity() function to check if input is valid
            if (input.checkValidity() == false) {

                var inputCustomValidation = new CustomValidation(); // New instance of CustomValidation
                inputCustomValidation.checkValidity(input); // Check Invalidities
                var customValidityMessage = inputCustomValidation.getInvalidities(); // Get custom invalidity messages
                input.setCustomValidity(customValidityMessage); // set as custom validity message

                // DISPLAY ERROR MESSAGES IN DOCUMENT
                var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
                input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
                stopSubmit = true;
            } // end if
        } // end loop

        if (stopSubmit) { e.preventDefault(); }
    });

    function CustomValidation() { }
    CustomValidation.prototype = {
        // Set default empty array of invalidity messages
        invalidities: [],

        // Function to check validity
        checkValidity: function (input) {

            var validity = input.validity;

            if (validity.patternMismatch) {
                this.addInvalidity('This is the wrong pattern for this field');
            }
            if (validity.rangeOverflow) {
                var max = getAttributeValue(input, 'max');
                this.addInvalidity('The maximum value should be ' + max);
            }
            if (validity.rangeUnderflow) {
                var min = getAttributeValue(input, 'min');
                this.addInvalidity('The minimum value should be ' + min);
            }
            if (validity.stepMismatch) {
                var step = getAttributeValue(input, 'step');
                this.addInvalidity('This number needs to be a multiple of ' + step);
            }
            // Additional validity checks here...
        },

        // Add invalidity message to invalidities object
        addInvalidity: function (message) {
            this.invalidities.push(message);
        },

        // Retrieve the invalidity messages
        getInvalidities: function () {
            return this.invalidities.join('. \n');
        }
    };

    CustomValidation.prototype.getInvaliditiesForHTML = function () {
        return this.invalidities.join('. <br>');
    }
}