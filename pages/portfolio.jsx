import React, { Component, Fragment } from 'react'
import axios from 'axios'
import BaseLayout from '../components/layouts/BaseLayout'
import { withRouter } from 'next/router'

class Portfolio extends Component {
    static async getInitialProps({ query }) {
        const id = query.id;
        debugger
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // .then(console.log).catch(console.log);
        let post = data;
        return { post }
    }
    render() {
        return (
            <BaseLayout>
                <h4>
                    {this.props.post.title}
                </h4>
                <div>
                    {this.props.post.body}
                </div>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);