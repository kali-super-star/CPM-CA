import React from 'react'
import Link from 'gatsby-link'
import classes from './Footer.module.css'


export default () => (
    <div>
        <div style={{backgroundColor: '#333333'}}>
            <div style={{maxWidth: 1170, padding: '40px 15px', margin: 'auto'}}>
                <div style={{color: '#fff'}} className={classes.FooterLinksWrap}>
                    <ul style={{display: 'flex'}} className={classes.UlLinks}>
                        {/*<li style={{padding: '0 10px'}}><Link style={{color: '#fff'}} to="/carrieres">Carrières</Link></li>*/}
                        {/*<li style={{padding: '0 10px'}}>|</li>*/}
                        <li style={{padding: '0 10px'}}><Link style={{color: '#fff'}} to="/en/privacy-policy">Privacy</Link></li>
                        <li style={{padding: '0 10px'}}>|</li>
                        <li style={{padding: '0 10px'}}><Link style={{color: '#fff'}} to="/en/contact">Contact</Link></li>
                    </ul>
                </div>
                <div style={{color: 'white', textAlign: 'center'}}>© 2003-2018 CPM-CA™ • Center of Psychotraumatology and Mediation</div>
            </div>
        </div>
        <div style={{backgroundColor: '#000'}}>
            <div style={{color: '#fff', fontSize: '0.8rem', textAlign: 'center'}}>
                <div style={{maxWidth: 1170, padding: '40px 20px 20px', margin: 'auto', fontSize: '1rem'}}>
                    <div >
                        If you are in a critical situation or someone is in danger, do not use this site. <Link to="/en/crisis-line">These resources</Link> can provide immediate help.
                    </div>
                    <div style={{fontWeight: '600'}}>
                        Crisis Line (Ottawa): 613-722-6914<br />
                    </div>
                </div>

            </div>
        </div>
    </div>

)