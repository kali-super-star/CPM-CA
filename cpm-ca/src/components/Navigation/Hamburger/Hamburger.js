import React from 'react'
import classes from './Hamburger.module.css'


export default (props) => {
    let activeClass = [classes.HamburgerContainer];
    if(props.active) {
        activeClass = [classes.HamburgerContainer, classes.Active].join(' ')
    }
    return (
        <div className={activeClass} onClick={props.clicked}>
            <div className={classes.Hamburger} />
        </div>
    )
}