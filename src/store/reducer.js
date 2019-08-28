const defaultState = {
    inputValue: '',
    list: [
        "list1",
        "list2",
        "list3"
    ]
}
/**
 * reducer 一定返回一个函数
 * 不能修改state，只能返回一个新的state
 * @param state
 * @param action
 */
export default (state = defaultState,action) => {

    if(action.type === 'change_input_value'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === 'add_list_item'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if(action.type === 'delete_list_item'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }

    if(action.type === 'init_todo_list'){
        console.log(action.data);
        let newState = JSON.parse(JSON.stringify(state));
        newState = action.data;
        return newState;
    }

    if(action.type === 'delete_input_value'){
        console.log('delete inputValue');
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = "";
        return newState;
    }

    return state;
}