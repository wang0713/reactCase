
import React, { Component } from 'react'
import './grammar.css';
class grammar extends Component {
    state = {
        name: "",
        listArr: [
            {
                name: "书包",
                price: "90",
                number: 20
            },
            {
                name: "键盘",
                price: "89",
                number: 12
            },
        ]
    }
    constructor(props) {
        super(props)
        console.log("home/grammar", props);
        
        this.state.name = props.name
    }
    render() {

        return (
            <div style={{marginTop: '20px'}}>
                {this.state.name}
                <div className="list">
                    <div>商品</div>
                    <div>价格</div>
                    <div>数量</div>
                </div>
                {this.list()}
            </div>
        )
    }
    list = () => {
        let list = this.state.listArr.map((item, index) => {
            return <div key={index} className="list">
                <div style={{visibility: item.name === '键盘' ? "hidden" : "visible"}}>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.number}</div>
            </div>
        })
        console.log(list);
        
        return list
        
        
    }
}

export default grammar