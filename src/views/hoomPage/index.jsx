

import React, { Component } from 'react'


import Control from "@/views/hoomPage/control/control.jsx"
import Grammar from "@/views/hoomPage/grammar/grammar.jsx"
import RouterTest from '@/views/components/routerTest.jsx';
class index extends Component {
  static defaultProps = {
    name: "props默认值"
  }
  state = {

    name: "初始化",
    index: 1
  }
  constructor(porps) {
    super(porps)
    // 初始化之前可以直接修改state
    this.state.name = porps.name;
    console.log("home", porps);
    // this.setState({
    //   name: porps.name
    // })
  }

  render() {
    return (
      <div>
        首页
        <br />
        <RouterTest fatherProps={this.props}></RouterTest>
        <Control name="表单控件"></Control>
        <Grammar name="基础语法"></Grammar>
      </div>
    );
  }
  jump = () => {
    this.props.history.goBack(1)
  }
  // refChangState(Data) {
  //   this.setState({
  //     tabs: Data
  //   })
  // }
}

export default index;
