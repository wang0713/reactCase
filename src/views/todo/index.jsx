
import React, { Component } from 'react'
import RouterTest from '@/views/components/routerTest.jsx';
import ReduxBeta from "@/views/todo/reduxBeta/reduxBeta.jsx"
export default class todo extends Component {

    render() {

        return (
            <div>
                代办
                <br />
                <RouterTest fatherProps={this.props}></RouterTest>
                <br/>
                <ReduxBeta></ReduxBeta>
            </div>
        )
    }
}