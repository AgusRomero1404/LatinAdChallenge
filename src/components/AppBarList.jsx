import React from 'react'
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import InboxIcon from '@mui/icons-material/Inbox';


function AppBarList() {
    const navList = [
        {
            title: "Dashboard",
            path:"#",
            icon: <InboxIcon />
        },
        {
            title: "Edit",
            path:"#edit",
            icon: <EditIcon />
        },
        {
            title: "Create",
            path:"#Create",
            icon: <AddIcon/>
        },
    ]

  return (
    <Box sx = {{width:250}}> 
        <nav>
            <List>
                {
                    navList.map(item => (
                        <ListItem   disablePadding key={item.title}>
                           
                        <ListItemButton component = "a" href={item.path}>
                        <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>{item.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    ))
                }
            </List>
        </nav>
    </Box>
  )
}

export default AppBarList