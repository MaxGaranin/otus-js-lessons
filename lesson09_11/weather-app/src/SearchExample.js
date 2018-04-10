import React, {Component} from 'react';

class SearchExample extends Component {
    constructor() {
        super();
        this.state = {
            searchString: '';
    }
    }

    render() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if (searchString.length > 0) {
            libraries = libraries.filter(function (l) {
                return l.name.toLowerCase().match(searchString);
            });
        }

        return (
            <div>
                <input type="text" value={this.state.searchString}
                       onChange={this.handleChange.bind(this)}
                       placeholder="Type here"/>
                <ul>
                    {libraries.map(function (l) {
                        return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                    })}
                </ul>
            </div>
        );
    }

    handleChange(e) {
        this.setState({searchString: e.target.value});
    }
}

export default SearchExample;


