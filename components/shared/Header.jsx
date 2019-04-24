import React, { Component,Fragment } from 'react';
import Link from 'next/link'
import '../../styles/main.scss';
import axios from 'axios'

export default class Header extends Component {

    constructor(props){
        super(props)
       
    }

    render() { 
        return (
            <Fragment>
                <ul>
                    <Link href="/">
                        <a href="" >Home</a>
                    </Link>
                    <Link href="/blogs">
                        <a >Blogs</a>
                    </Link>
                    <Link href="/portfolios">
                        <a >Portfolio</a>
                    </Link>
                    <Link href="/cv">
                        <a >Curriculum</a>
                    </Link>
                    <Link href="/about">
                        <a >About</a>
                    </Link>
                </ul>

                <style jsx>{`
                    a{
                        font-size:25px;
                        text-decoration:none;
                        padding:4px;
                    }

                `}</style>
            </Fragment>
        )
    }
}