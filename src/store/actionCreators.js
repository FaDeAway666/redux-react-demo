import { CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_TODO_LIST, GET_INIT_LIST, DELETE_INPUT_VALUE } from './actionType';
import axios from 'axios'
/**
 * () => ({})等价于() => { return {} }
 */
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value) => ({
    type: ADD_LIST_ITEM,
    value
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_LIST_ITEM,
    index
})

export const initTodoList = (data) =>{
    return {
        type: INIT_TODO_LIST,
        data
    }
} 

export const getInitList = () => {
    return {
        type: GET_INIT_LIST
    }
}

export const getDeleteInputAction = () => {
    return {
        type: DELETE_INPUT_VALUE
    }
}

//使用redux-thunk
// export const getTodoList = () => {
//     //store接收的函数会默认把dispatch方法传入
//     return (dispatch) => {
//         axios.get('http://yapi.demo.qunar.com/mock/89090/list').then((res) => {
//             console.log(res.data);
//             if(res.data)
//                 dispatch(initTodoList(res.data.data));
//         })
//     }
// }