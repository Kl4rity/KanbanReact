import React, { Component } from 'react';
import { connect } from 'react-redux';
import SidebarItem from './sidebar-item-component/sidebarItem.component';
import M from 'materialize-css';

class Sidebar extends Component {

    componentDidMount() {
        M.Sidenav.init(this.sidenav);
    }

    constructor(props) {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <ul className="sidenav sidenav-fixed"
                    ref={(sidenav) => { this.sidenav = sidenav }}
                    id="slide-out">
                    {
                        this.props.boards.map(
                            value => {
                                return (
                                    <SidebarItem title={value.title} key={value.id} />
                                )
                            }
                        )
                    }

                </ul>

                {/* TODO! Make this button appear only when the sidebar is gone. */}
                {/* <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return { boards: state.boards }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);