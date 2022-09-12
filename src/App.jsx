import React, { Component } from "react";
// 全局的样式
// import GlobalStyle from "./assets/style/main";
import HoomPage from "@/views/hoomPage/index.jsx"
import Todo from "@/views/todo/index.jsx"
import PersonalCenter from "@/views/personalCenter/index.jsx"
import Message from "@/views/message/index.jsx"
// import { TabBar } from 'antd-mobile'
import "./views/hoomPage/grammar/grammar.css"
import {
  AppOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import {
  // HashRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    this.state = {
      tabs: [
        {
          key: 'home',
          title: '首页',
          icon: <AppOutline />,
        },
        {
          key: 'todo',
          title: '我的待办',
          icon: <UnorderedListOutline />,
        },
        {
          key: 'message',
          title: '我的消息',
          icon: <MessageFill />,
        },
        {
          key: 'personalCenter',
          title: '个人中心',
          icon: <UserOutline />,
        },
      ]
    }

  }
  render() {
    return (
      <div>
        <div className="list">
          {
            this.state.tabs.map(item => {
              return <Link key={item.key} to={`/${item.key}`}>
                {item.title}
              </Link>
            })
          }
          
        </div>
        
        {/* <GlobalStyle></GlobalStyle> */}
        {/* <TabBar>
          {this.state.tabs.map(item => (
              <TabBar.Item  key={item.key} icon={item.icon}  title={item.title} />
          ))}
        </TabBar> */}
        {/* <HoomPage name="组件传值" ref={this.refPage}></HoomPage> */}
        
        <Route path="/home" component={HoomPage}></Route>
        <Route path="/todo" component={Todo}></Route>
        <Route path="/message" component={Message}></Route>
        <Route path="/personalCenter" component={PersonalCenter}></Route>
      </div>
    );
  }

}

export default App;
