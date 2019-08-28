import React from 'react';
import { connect } from 'react-redux';
import { getDeleteInputAction } from '../store/actionCreators'

const List = (props) => {
    return (
        <div onClick={props.handleClick}>
            { props.inputValue }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick() {
            dispatch(getDeleteInputAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);