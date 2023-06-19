import React from 'react'

import classes from './Navigation.module.css'

import CallToAction from '../CallToAction'
import NavLinks from './NavLinks'


const Navigation =  () => (
    <div className={classes.NavWrap}>
        <NavLinks/>
        <CallToAction/>
    </div>
)


export default Navigation