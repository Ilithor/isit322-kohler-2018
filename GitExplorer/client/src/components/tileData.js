import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/">
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="GitUser"/>
        </ListItem>
        <ListItem
            button
            component={Link}
            to="/foobar/bar">
            <ListItemIcon>
                <StarIcon/>
            </ListItemIcon>
            <ListItemText primary="Micros"/>
        </ListItem>
        <ListItem
            button
            component={Link}
            to="/gists/get-basic-list">
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Gist Lister"/>
        </ListItem>
    </div>
);

export const demoItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/api/foo">
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="API Foo"/>
        </ListItem>

    </div>
);