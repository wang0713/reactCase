
import React, { Component } from 'react'
import RouterTest from '@/views/components/routerTest.jsx';
export default class personalCenter extends Component {
    
    constructor(props) {
        super(props)
        console.log("personalCenter",props);
    }
    render() {
        return (
            <div>
                设置页面
                <br/>
                <RouterTest fatherProps={this.props}></RouterTest>
            </div>
        )
    }
    jump = () => {
        this.props.history.replace({
            pathname: "/home",
            search: "from=200",	// 表示传递查询字符串
            state: {	// 隐式传参，地址栏不体现
              username: "admin",
            },
          });
    }
}
