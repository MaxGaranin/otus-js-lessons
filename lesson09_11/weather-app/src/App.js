import React, {Component} from 'react';
import './App.css';
import MenuExample from "./temp/MenuExample";
import SearchExample from "./temp/SearchExample";
import CitySelector from "./CitySelector";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<MenuExample items={['Home', 'Services', 'About', 'Contact us']}/>*/}
                {/*<SearchExample items={libraries}/>*/}

                <span>Поиск города:</span>
                <CitySelector/>
            </div>
        );
    }
}

export default App;
