import React from 'react'
import Head from '../components/Head'

import {Route} from 'react-router-dom'
import About from "./About";
import Home from "./Home";

export default class Main extends React.Component {
    render() {
        return (
            <html>
                <Head title='React and CSS Modules'/>
                <body>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </body>
            </html>
        )
    }
}