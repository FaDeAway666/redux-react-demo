import React,{ Component } from 'react';
import { ListItemStyle, DeleteBtn } from './Style';

class ListItem extends Component {

    handleDelete(){
        console.log(this.props.index);
        this.props.handleDelete(this.props.index)
    };

    render(){
        return (
            <ListItemStyle>
                { this.props.item }
                <DeleteBtn onClick={this.handleDelete.bind(this)}>删除</DeleteBtn>
            </ListItemStyle>
        )
    }
}

export default ListItem 