import React, { Component } from 'react'

export default class MovieDetail extends Component {

    goBack = () => {
        window.history.back()
    }

    componentDidMount() {
        // TODO: fetch api movie detail
    }

    render() {

        return (
            <div>
                <button onClick={this.goBack}>Go back</button>
                <br/>
                <span>Id: {this.props.match.params.id}</span>
            </div>
        )
    }

}