import React, {Component} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import { cities } from './DataSource';

class CitySelector extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <ReactAutocomplete
                items={cities}
                shouldItemRender={(item, value) => item.city.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.city}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.city}
                    </div>
                }
                value={this.state.value}
                onChange={e => this.setState({value: e.target.value})}
                onSelect={value => this.setState({value})}
            />
        )
    }
}

export default CitySelector;