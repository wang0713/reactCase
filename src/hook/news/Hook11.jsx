import React, { useState, useEffect } from "react";

const Hook11 = (props) => {
  const [state, setstate] = useState({ age: "wang" });
  useEffect(() => {
    console.log("组件已经初始化或更改完成了");
    return () => {
        console.log(state);
        console.log("组件已经销毁");
    };
  }, state.age);

  return (
    <div>
      {state.name}
      <button onClick={cli.bind(this,props,state,setstate)}>点击跳转</button>
    </div>
  );
};
const cli = (props,state,setstate) => {
    // 这里数据已经修改  无法显示
    setstate({...state, name: "han"})
  console.log(props);
  props.history.push({
    pathname: "/hook2",
  });
}
export default Hook11;
