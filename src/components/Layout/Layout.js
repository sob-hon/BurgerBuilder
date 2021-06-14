import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from "./Layout.module.css";

const Layout = ({children}) => {
  return(
    <Auxiliary>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </Auxiliary>
  )
}

export default Layout;