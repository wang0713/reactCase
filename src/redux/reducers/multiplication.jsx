export default function countRedux(preState, action) {
    let {type, data} = action;

    switch (type) {
        case "add3":
            return preState * data
        default:    
            return 0
    }
}