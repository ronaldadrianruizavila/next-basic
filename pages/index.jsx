import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import SuperComponent from '../components/SuperComponent'
import axios from 'axios'

class Index extends SuperComponent {

    static async getInitialProps(){
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            // .then(console.log).catch(console.log);
            //console.log(data)
        return{initialData:[1,2,3,4,]}
    }

    constructor(props){
        super(props)
        console.log('constructor')
        this.state={
            number:0
        }

    }

    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        console.log('render')
        const counter = this.state.number;
        const data = this.props.initialData.map((e,index)=>{
                return (<li key={index} >{e}</li>)
        })
        return (
            <BaseLayout>
                <ul>{counter}</ul>  
                <div>{data}</div>    
                <button onClick={()=>this.setState({number:this.state.number+1})} >subir</button>        
            </BaseLayout>
        )
    }
}

export default Index;