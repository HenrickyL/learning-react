import { useState } from 'react';
import {SidebarLink,SidebarLabel,DropdownLink} from './style.js'

const SubMenu = ({item,index})=>{
    const [subnav,setSubnav] =useState(false)
    const showSubnav = ()=>{
        setSubnav(!subnav)
    }
    return(
        <>
            <SidebarLink key={'key_'+index} to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.title}
                    </SidebarLabel>
                </div>
                <div>
                    {
                        item.subNav && subnav 
                        ? item.iconOpened
                        : item.subNav 
                        ? item.iconClosed
                        :null
                    }
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index)=>{
                return  <DropdownLink key={index} to={item.path}>
                            {item.icon}
                            <SidebarLabel>
                                {item.title}
                            </SidebarLabel>
                        </DropdownLink>
            })}
        </>
    )
}

export default SubMenu;