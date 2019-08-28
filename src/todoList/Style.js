import styled from 'styled-components';

export const ListItemStyle = styled.div`
    line-height: 30px;
    padding-left: 20px;
    $::after{
        clear: both;
        content: '';
        display: block;
    }
`;

export const DeleteBtn = styled.a`
    float: right;
    margin-right: 20px;
    color: red;
    font-size: 12px;
    cursor: pointer;
`;