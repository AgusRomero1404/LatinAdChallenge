import React, { useState } from 'react'
import AppBarList from './AppBarList'
import { AppBar, Button, Drawer, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
    <AppBar position='static'>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <IconButton
        color='inherit'
        size="large"
        onClick={() => setShowMenu (true)}>
          <MenuIcon />
        </IconButton>
          <IconButton 
                color='inherit'
                size="large"
          >
             <LogoutIcon/>
          </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
    open={showMenu}
    anchor="left"
    onClose={() => setShowMenu(false)}
    >
       <AppBarList>

      </AppBarList>
    </Drawer>

    </>
 
  )
}

export default NavBar