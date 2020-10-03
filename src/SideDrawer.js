import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -90
        })
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={() => scrollToElement('About COVID-19')}>
                    About COVID-19
                </ListItem>

                <ListItem button onClick={() => scrollToElement('The Latest Information')}>
                    The Latest Information
                </ListItem>

                <ListItem button onClick={() => scrollToElement('Cases in KP Regions')}>
                    Cases in KP Regions
                </ListItem>

                <ListItem button onClick={() => scrollToElement('KP Vaccine Updates')}>
                    KP Vaccine Updates
                </ListItem>

                <ListItem button onClick={() => scrollToElement('FAQ')}>
                    FAQ
                </ListItem>

            </List>
        </Drawer>
    );
};

export default SideDrawer;