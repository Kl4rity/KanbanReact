import React from 'react';

const SidebarItem = (props) =>{
    return(

        <li>
            <a className="waves-effect">{props.title}</a>
        </li>
    )
}

export default SidebarItem;