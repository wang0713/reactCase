let publicList = {
    go(props, num){
        props.history.go(num)
    },
    back(props, num){
        props.history.goBack()
    },
    forward(props, num){
        props.history.goForward()
    },
    pushHome(props, num){
        props.history.push({
            pathname: "/home",
        })
    },
    pushTodo(props, num) {
        props.history.push({
            pathname: '/todo'
        })
    },
    pushMessage(props, num) {
        props.history.push({
            pathname: '/message'
        })
    },
    pushPersonalCenter(props, num) {
        props.history.push({
            pathname: '/personalCenter'
        })
    },
    replaceHome(props, num){
        props.history.replace({
            pathname: "/home",
        })
    },
    replaceTodo(props, num) {
        props.history.replace({
            pathname: '/todo'
        })
    },
    replaceMessage(props, num) {
        props.history.replace({
            pathname: '/message'
        })
    },
    replacePersonalCenter(props, num) {
        props.history.replace({
            pathname: '/personalCenter'
        })
    }
}

export default publicList