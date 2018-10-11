import React from 'react';
import Sidebar from '../sidebar-component/sidebar.component';
import Workarea from '../workarea-component/workarea.component';

const Kanban = (props)=>{
    return(
        <React.Fragment>
            <Sidebar/>
            <Workarea/>
        </React.Fragment>
    )
}

export default Kanban;