import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from '../SidebarData.js'
import {Nav,NavIcon,SidebarNav,SidebarWrap} from './style.js'
import SubMenu from '../SubMenu/index.jsx';
import { IconContext } from 'react-icons';




const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = ()=>{setSidebar(!sidebar)} 

    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>

                <Nav>
                    <NavIcon  to="#">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon  to="#">
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </NavIcon>
                        {SidebarData.map((item,index)=>{
                            return <SubMenu index={index} item={item}/>
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>

        </>
    )
}

export default Sidebar
