import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initTodoList } from './actionCreators'
import axios from 'axios'

function* getInitTodoList(){
    try{
        const res = yield axios.get('http://yapi.demo.qunar.com/mock/89090/list');
        const action = yield initTodoList(res.data.data);
        console.log(action);
        yield put(action);
    }catch(e){
        yield console.log(e);
    }
}

function* mySaga(){
    //接收到一个action类型，就执行一个方法
    yield takeEvery(GET_INIT_LIST, getInitTodoList);
}

// function* mySaga(){
//     yield takeLatest()
// }

export default mySaga;