import React, { Component } from 'react';

class SearchExample extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        return this.setState( { searchString: '' });
    }

    handleChange(e){

        // Если вы закомментируете данную строку, поле ввода не изменит свое значение.
        // Это потому, что в React'е, поле не может измениться независимо от свойства
        // которое было ему присвоено. В нашем случае, это this.state.searchString.

        this.setState({searchString:e.target.value});
    }

    render() {

        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // Ищем. Фильтрируем резальтаты.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
            <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Type here" />

            <ul>

                { libraries.map(function(l){
                    return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                }) }

            </ul>

        </div>;

    }
}

export default SearchExample;


