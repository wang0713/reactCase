
import React, { Component, createRef} from 'react'


class control extends Component {

    constructor(props) {
        super(props)
        this.as = 12;
        this.refInp = createRef()
        this.state = {
            name: props.name,
            userInfo: {
                name: "",
                gender: "女"
            }
        }
    }
    render() {
        let { name, gender } = this.state.userInfo
        return (
            <div style={{marginTop: '50px'}}>
                {this.state.name}
                <div>
                    受控组件
                    <input type="text" value={name} name="name" onChange={this.inputChange}></input>
                    <br></br>
                    改变后的=== {this.state.userInfo.name}
                    <br />
                    <input
                        type="radio"
                        value="男"
                        checked={gender === "男" ? true : false}
                        name="gender"
                        onChange={this.inputChange}
                    />
                    男
                    <input
                        type="radio"
                        value="女"
                        checked={gender === "女" ? true : false}
                        name="gender"
                        onChange={this.inputChange}
                    />
                    女
                    <br />
                    改变后的==={this.state.userInfo.gender}
                </div>
                <div>
                    非受控组件
                    <input type="number" defaultValue="12" ref={this.refInp}></input>
                    <button onClick={this.saveInput}>提交</button>
                    <br></br>
                    改变后的值只有点击提交才可以通过ref获取到
                </div>
                
            </div>
        )
    }
    inputChange = (e) => {
        let value = e.target.value;
        let key = e.target.name;
        this.setState(state => {
           return state.userInfo[key] = value
        })
    }
    saveInput = () => {
        console.log(this.refInp.current.value);
    }
}
export default control