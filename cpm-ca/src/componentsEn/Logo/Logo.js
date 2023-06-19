import React from 'react'
import Link from 'gatsby-link'
import classes from './Logo.module.css'
import LogoIcon from '../../images/cpm-ca-logo-v3.svg'

export default () => (
    <div style={{display: 'flex'}}>
        <Link to="/en" className={classes.LogoImage}>
                <img src={LogoIcon} alt="Psy Scan Institute Logo" style={{width: '100%'}}/>
        </Link>
    </div>
)
