import React from 'react'
import Link from 'gatsby-link'

import classes from './Footer.module.css'

import FooterImage from '../../images/logo-fsb.png'

export default () => (
    <div>
        <div style={{backgroundColor: '#333333'}}>
            <div style={{maxWidth: 1170, padding: '40px 15px', margin: 'auto'}}>
                <div style={{color: '#fff'}} className={classes.FooterLinksWrap}>
                    <ul style={{display: 'flex'}} className={classes.UlLinks}>
                        {/*<li style={{padding: '0 10px'}}><Link style={{color: '#fff'}} to="/carrieres">Carrières</Link></li>*/}
                        {/*<li style={{padding: '0 10px'}}>|</li>*/}
                        <li style={{padding: '0 10px'}}><Link style={{color: '#fff'}} to="/politique-de-confidentialite">Confidentialité</Link></li>
                        <li style={{padding: '0 10px'}}>|</li>
                        <li style={{padding: '0 10px'}}><Link style={{color: '#fff'}} to="/contact">Contact</Link></li>
                    </ul>
                    {/*<div style={{maxWidth: 200}} className={classes.FooterImage}>*/}
                    {/*<img src={FooterImage} alt="Logo Association des psychologues" style={{width: '100%'}}/>*/}
                    {/*</div>*/}
                </div>
                <div style={{color: 'white', textAlign: 'center'}}>© 2003-2018 CPM-CA™ • Centre de Psychotraumatologie et de Mediation</div>
            </div>
        </div>
        <div style={{backgroundColor: '#000'}}>
            <div style={{color: '#fff', fontSize: '0.8rem', textAlign: 'center'}}>
                <div style={{maxWidth: 1170, padding: '40px 20px 20px', margin: 'auto', fontSize: '1rem'}}>
                    <div >
                        Si vous êtes en situation de crise ou une personne est en danger, n'utilisez pas ce site. <Link to="/ligne-de-crise">Ces ressources</Link> peuvent vous fournir une aide immédiate.
                    </div>
                    <div style={{fontWeight: '600'}}>
                        Ligne de crise (Ottawa): 613-722-6914<br />
                    </div>
                </div>

            </div>
        </div>
    </div>

)