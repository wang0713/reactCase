// 底部导航
import React, { Component } from "react";

// 导入顶部
// import TopNav from "@/views/cookBook/index";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab",
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        
      </div>
    );
  }
}

export default index;
