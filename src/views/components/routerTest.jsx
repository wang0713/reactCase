import publicJs from "../public/js.js";

function RouterTest(props) {
  console.log("组件props", props.fatherProps);
  let currentRouter = props.fatherProps.match.path;
  let homeShow = { display: "inline" },
    todoShow = { display: "inline" },
    messageShow = { display: "inline" },
    personalCenterShow = { display: "inline" };


  switch (currentRouter) {
    case "/home":
      homeShow = { display: "none" };
      break;
    case "/todo":
      todoShow = { display: "none" };
      break;
    case "/message":
      messageShow = { display: "none" };
      break;
    case "/personalCenter":
      personalCenterShow = { display: "none" };
      break;
    default:
      break;
  }
  return (
    <div>
      <button onClick={publicJs.forward.bind(this, props.fatherProps)}>
        前进一个路由
      </button>
      <button onClick={publicJs.back.bind(this, props.fatherProps)}>
        后退一个路由
      </button>
      <br />
      push路由
      <br />
      <button
        style={homeShow}
        onClick={publicJs.pushHome.bind(this, props.fatherProps)}
      >
        跳转home页面 push
      </button>
      <button
        style={todoShow}
        onClick={publicJs.pushTodo.bind(this, props.fatherProps)}
      >
        跳转todo页面 push
      </button>
      <button
        style={messageShow}
        onClick={publicJs.pushMessage.bind(this, props.fatherProps)}
      >
        跳转message页面 push
      </button>
      <button
        style={personalCenterShow}
        onClick={publicJs.pushPersonalCenter.bind(this, props.fatherProps)}
      >
        跳转personalCenter页面 push
      </button>
      <br />
      replace路由
      <br />
      <button
        style={homeShow}
        onClick={publicJs.replaceHome.bind(this, props.fatherProps)}
      >
        跳转home页面 replace
      </button>
      <button
        style={todoShow}
        onClick={publicJs.replaceTodo.bind(this, props.fatherProps)}
      >
        跳转todo页面 replace
      </button>
      <button
        style={messageShow}
        onClick={publicJs.replaceMessage.bind(this, props.fatherProps)}
      >
        跳转message页面 replace
      </button>
      <button
        style={personalCenterShow}
        onClick={publicJs.replacePersonalCenter.bind(this, props.fatherProps)}
      >
        跳转personalCenter页面 replace
      </button>
    </div>
  );
}

export default RouterTest;
