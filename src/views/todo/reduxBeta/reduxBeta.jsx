import React, { Component } from 'react'
// import store from "@/redux/store/calculate.jsx"
import reduxAction from "@/redux/action/calculate.jsx"
import { connect } from "react-redux"
class reduxBeta extends Component {
    state = {

    }
    constructor(props) {
        super(props)
        console.log(props);
        
        // store.subScribe(() => {
        //     this.state = {}
        // })
    }

    componentDidMount() {
        // 当Redux状态变化时，强制更新rendar,让页面进行渲染
        // console.log("stfs", store);
        
        // store.subscribe(() => {
        //     this.setState({})
        // })
    }
    render() {
        return (
            <div>
                {/* {store.getState()} */}
                {this.props.count}
                <select ref={(c) => { this.select = c }}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                <button onClick={this.props.addNumber.bind(this, 1)}>+</button>
                <button onClick={this.props.addNumber.bind(this, 2)}>-</button>
                {/* <button onClick={this.add1.bind(this)}>+</button>
                <button onClick={this.add2.bind(this)}>-</button> */}
            </div>
        )
    }
    // handleADD = () => {
    //     // react中无法直接修改redux中的数据.需要调用dispatch
    //     // 调用dispatch要传入一个action
    //     // this.props.dispatch({ type: "ADD", data: 2 });
    //     this.props.onADD();
    //   };
    add1() {
        // let { value } = this.select;
        // store.dispatch(reduxAction.add1(value * 1))
    }
    add2() {
        // let { value } = this.select;
        // store.dispatch(reduxAction.add2(value * 1))
    }
}
const mapStateToProps = (state) => {
    return {
        count: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNumber(type) {
            let { value } = this.select;
            if(type === 1) {
                dispatch(reduxAction.add1(value * 1))
            } else if(type === 2) {
                dispatch(reduxAction.add2(value * 1))
            }
        }
    }
}
// export default reduxBeta
export default connect(mapStateToProps, mapDispatchToProps)(reduxBeta);