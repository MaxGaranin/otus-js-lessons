import React, { Component } from 'react';

export default class Navigation extends Component {
    render() {
        const {navs} = this.props;

        const navElements = navs.map(nav =>
            <li key = {nav.id}>
                <a href={nav.ref}>{nav.title}</a>
            </li>
        );

        return (
            <nav>
                {navElements}
            </nav>
        );
    }
}