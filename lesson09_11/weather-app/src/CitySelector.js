import React, { Component } from 'react';

class CitySelector extends Component {

    render() {
        $(function () {
            var langs = ["Java", "JavaScript", "VisualBasic", "PHP", "Pascal"];
            $('input#lang').autocomplete({
                source: langs
            });
        });

        return (
            <input id='lang'></input>
        );
    }
}

export default CitySelector;