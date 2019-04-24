import React, { Component } from 'react'

class SuperComponent extends Component {
    constructor(props){
        super(props)
        this.someVariable = 'Just some variable'
    }

    alertname(title){
        alert()
    }
}

export default SuperComponent;