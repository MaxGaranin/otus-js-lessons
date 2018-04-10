import React, {Component} from 'react';

class MenuExample extends Component {
    constructor() {
        super();
        this.state = {
            focused: 0
        }
    }

    render() {
        var self = this;

        return (
            <div>
                <ul>{this.props.items.map(function (m, index) {
                    var style = '';
                    if (self.state.focused === index) {
                        style = 'focused';
                    }

                    return (
                        <li className={style} onClick={self.clicked.bind(self, index)}>
                            {m}
                        </li>
                    );
                })}
                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }

    clicked(index) {
        this.setState({focused: index});
    }
}

export default MenuExample;
