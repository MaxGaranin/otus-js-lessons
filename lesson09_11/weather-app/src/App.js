import React, {Component} from 'react';
import './App.css';
import {libraries} from "./DataSource"
import MenuExample from "./MenuExample";
import SearchExample from "./SearchExample";
import CitySelector from "./CitySelector";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MenuExample items={['Home', 'Services', 'About', 'Contact us']}/>

                <SearchExample items={libraries}/>

                <CitySelector/>
            </div>
        );
    }
}

export default App;
