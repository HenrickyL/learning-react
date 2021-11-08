import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarLink = styled(Link)`
    display:flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    font-weight: bold;
    height: 60px;
    /* transition: 100ms; */
    text-decoration:none;
    font-size:18px;
    &:hover{
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor:pointer;
    }    

`


export const SidebarLabel = styled.span`
    margin-left:16px;
`
export const DropdownLink = styled(Link)`
    display: flex;
    background: #414757;
    height: 50px;
    padding-left: 3rem;
    align-items: center;
    color: #f5f5f5;
    font-size:16px;
    list-style: none;
    text-decoration:none;
    &:hover{
        background: #632ce4;
        cursor:pointer;

    }


`