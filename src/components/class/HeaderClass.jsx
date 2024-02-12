import React, { Component } from 'react'

export default class HeaderClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John'
        }
    }
    handleClick = () => {
        this.setState({
            name: 'Nick'
        })
    }
    render() {
        return (
            <div>HeaderClass</div>
        )
    }
}
