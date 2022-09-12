
import React, { Component } from 'react'
import RouterTest from '@/views/components/routerTest.jsx';
export default class message extends Component {
    render() {
        return (
            <div>
                消息
                <br />
                <RouterTest fatherProps={this.props}></RouterTest>
            </div>
        )
    }
}