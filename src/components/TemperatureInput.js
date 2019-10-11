import React, { Component } from 'react';

const scalNames = {
    c: "Celsius",
    f: "Fharenheit"
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }
    
    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <div>
                <fieldset>
                    <legend>Enter Temperature in {scalNames[scale]}:</legend>
                    <input
                        type="text"
                        value={temperature}
                        onChange={this.handleChange}
                    />
                </fieldset>        
            </div>
        )
    }
}

export default TemperatureInput
