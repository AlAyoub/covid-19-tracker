import React, { Component } from 'react';
import './Header.css'


import SideDrawer from './SideDrawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';



class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <header className="header">


                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor: this.state.headerShow ? '#ffffff' : 'transparent',
                        boxShadow: 'none',
                        padding: '0px 0px'
                    }}
                >
                    <Toolbar className="header_toolbar">
                        <IconButton
                            className="header_menuButton"
                            aria-label="Menu"
                            onClick={() => this.toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <SideDrawer
                            open={this.state.drawerOpen}
                            onClose={(value) => this.toggleDrawer(value)}
                        />

                    </Toolbar>



                </AppBar>
            </header>
        );
    }
}

export default Header;

