import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div>
                My name is {this.props.userName}
            </div>
        );
    }
}