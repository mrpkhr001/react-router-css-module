import React from 'react'
import Button from "../components/Button";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <p>This is a home page</p>
                <Button text="A CSS module styled Button"/>
            </div>
        )
    }
}