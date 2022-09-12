// reducer 是一个纯函数只做数据处理
export default function countRedux(preState, action) {
    // preState  之前的数据
    // action  要改变的数据
    let {type, data} = action;

    switch (type) {
        case "add1":
            return preState + data
        case "add2":
            return preState - data
        default:    
            return 0
    }
}