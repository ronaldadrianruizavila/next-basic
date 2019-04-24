import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import {Link} from '../routes'

class Portfolio extends Component {
    static async getInitialProps() {
        let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(console.log).catch(console.log);
        return { data: data.splice(0, 3) }
    }

    renderPost(posts) {
        return posts.map(e => (
                <Link route={`/portfolio/${e.id}`}>
                    <h4>
                        <a href="">
                            {e.title}
                        </a>
                    </h4>
                </Link>
        ))
    }

    render() {
        return (
            <BaseLayout>
                <div>Hola Portfolio</div>
                <div>
                    {this.renderPost(this.props.data)}
                </div>
            </BaseLayout>
        )
    }
}

export default Portfolio;