import React, { useState } from 'react';
import { DeepReadonly } from '@noob/types';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Styles } from './sidebar.styles';

// Icons
import { Server } from '@styled-icons/feather/Server';
import { ExpandLess, ExpandMore } from 'styled-icons/material-outlined';
import { User } from '@styled-icons/entypo/User';

interface IOpenLists {
    [key: number]: boolean;
}

export interface ISidebarProps {
    label: string;
}

export function Sidebar(props: DeepReadonly<ISidebarProps>): JSX.Element {
    const [openLists, setOpenLists] = useState<IOpenLists>({});

    const handleClick = (listId: number): void => {
        setOpenLists((prevOpenLists: DeepReadonly<IOpenLists>) => ({
            ...prevOpenLists,
            [listId]: !prevOpenLists[listId],
        }));
    };

    return (
        <List aria-labelledby="nested-list-subheader" component="nav" sx={Styles.sidebar}>
            <ListSubheader component="div" sx={Styles.sidebarLabel}>
                {props.label}
            </ListSubheader>
            <ListItemButton
                className={openLists[1] ? 'open' : ''}
                disableRipple
                onClick={() => handleClick(1)}
                sx={Styles.menuItem}
            >
                <ListItemIcon>
                    <Server height={16} />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {openLists[1] ? <ExpandLess height={30} /> : <ExpandMore height={30} />}
            </ListItemButton>
            <Collapse in={openLists[1]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton disableRipple sx={Styles.menuItem}>
                        <ListItemIcon>
                            <User height={16} />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
