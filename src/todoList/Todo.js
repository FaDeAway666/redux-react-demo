import React from 'react'
// import ListItem from './ListItem'
import 'antd/dist/antd.css';
import { Button,Input,List } from 'antd';
import store from '../store';
import { getAddItemAction, getInputChangeAction, getDeleteItemAction, getInitList} from '../store/actionCreators';
// import './AppStyle';
class Todo extends React.Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        console.debug('dispatch');
        store.dispatch(getInitList());
    }

    handleStoreChange(){
        //注意，setState是异步方法！！
        this.setState(store.getState());
        //加了个延时打印就是相同的。。
        // console.log('store state',store.getState());
        // setTimeout(() => {
        //     console.log(this.state);
        // }, 0);
    }

    changeInputValue(e){
        store.dispatch(getInputChangeAction(e.target.value));
    }

    handleDelete(index){
        store.dispatch(getDeleteItemAction(index));
    }

    handleClick(){
        store.dispatch(getAddItemAction(this.state.inputValue));
    }
    render(){
        return(
            <div className="todo_wrap">
                <Input placeholder="please enter" value={this.state.inputValue} onChange={this.changeInputValue} style={{width: '200px',marginRight: '10px'}}/>
                <Button type="primary" onClick={this.handleClick}>添加</Button>
                <List
                    style={{marginTop: '20px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (
                        <List.Item onClick={this.handleDelete.bind(this,index)}> {item} </List.Item>
                    )}
                />
                {/* <input style={{width: '200px',marginRight: '10px'}} value={this.state.inputValue} onChange={this.changeInputValue}></input>
                <button onClick={this.handleClick}>add</button>
                <div style={{width: '300px',marginTop: '20px', border:'1px solid #eaeaea'}}>
                    { 
                        this.state.list.map( (item,index) => {
                            return (
                                <ListItem item={item} key={index} index={index} handleDelete={this.handleDelete}></ListItem>
                            )
                        })
                    }
                </div> */}
            </div>
        )
    }
}

export default Todo;