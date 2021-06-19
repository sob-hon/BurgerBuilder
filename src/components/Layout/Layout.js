import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar"


const Layout = ({children}) => {
  return(
    <Auxiliary>
      <Toolbar />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </Auxiliary>
  )
}

export default Layout;