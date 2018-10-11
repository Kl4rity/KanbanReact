import React from 'react';
import { connect } from 'react-redux';
import SidebarItem from './sidebar-item-component/sidebarItem.component';

const Sidebar = (props) => {
    return (
        <div>
            {
                props.boards.map(
                    value => {
                        return (
                            <SidebarItem title={value.title} key={value.id}/>
                        )
                    }
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return { boards: state.boards }
}

const mapDispatchToProps = () => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);