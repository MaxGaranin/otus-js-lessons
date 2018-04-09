import React, { Component } from 'react';

class MenuExample extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.setState({ focused: 0 });
    }

    clicked(index) {

        // Обработчик клика обновит состояние
        // изменив индекс на сфокусированный элемент меню

        this.setState({ focused: index });
    };

    render() {

        // Здесь мы читаем свойство items, которое было передано
        // атрибутом, при создании компонента

        var self = this;

        // Метод map пройдется по массиву элементов меню,
        // и возвратит массив с <li> элементами.

        return (
            <div>
                <ul>{this.props.items.map(function (m, index) {

                    var style = '';

                    if (self.state.focused == index) {
                        style = 'focused';
                    }

                    // Обратите внимание на использование метода bind(). Он делает
                    // index доступным в функции clicked:

                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;

                })}

                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );

    }
}

export default MenuExample;
