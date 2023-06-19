import React from 'react'
import Link from 'gatsby-link'

import classes from './Navigation.module.css'


export default ({ isMobile }) => {
    const activeLink = {
        color: "#c6c6c6",
        borderBottomColor: `${isMobile ? "rgba(9, 111, 173, 0.5)" : "#c6c6c6"}`
    }

    return (
        <ul className={classes.NavLinksWrap} style={{zIndex: 10}}>
            <li className={classes.ListLinkWrap}><Link exact activeStyle={activeLink} className={classes.NavLink} to="/">Accueil</Link></li>
            <li className={classes.ListLinkWrap}><Link exact activeStyle={activeLink} className={classes.NavLink} to="/reservation">Prendre Rendez-Vous</Link></li>
            <li className={classes.ListLinkWrap}><Link exact activeStyle={activeLink} className={classes.NavLink} to="/contact">Address et Contact</Link></li>
            <li className={classes.ListLinkWrap}><Link exact activeStyle={activeLink} className={classes.NavLink} to="/politique-de-confidentialite">Confidentialité</Link></li>
        </ul>
    )
}
