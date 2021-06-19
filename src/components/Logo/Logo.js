import React from 'react';
import burgerLogo from '../../assets/images/28.1 burger-logo.png'
import classes from './Logo.module.css'

const Logo = (props) => {
  return ( 
    <div className={classes.Logo}>
      <img className={classes.Logo__img} src={burgerLogo} alt="site's logo"/>
    </div>
   );
}
 
export default Logo;