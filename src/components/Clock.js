import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            time: new Date()     
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    render() {
        return (
            <h1>Time is :- {this.state.time.toLocaleTimeString()}</h1>
        )
    }
}

export default Clock
