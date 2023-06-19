import React from 'react'
import Link from 'gatsby-link'

import classes from '../Content.module.css'

import CalendarIcon from '../../../images/calendrier-icon.png'
import ContactIcon from '../../../images/contact-icon.png'
import CheckIcon from '../../../images/rencontrez-votre-therapeute.png'

export default () => (
    <div style={{backgroundColor: "#1689DF", color: '#ffffff'}}>
        <div  style={{maxWidth: 1170, padding: '40px 20px', margin: 'auto'}}>
            <div style={{textAlign: 'center'}}>
                <h2 style={{margin: '0 0 10px 0'}}>Comment on fonctionne</h2>
                <h5>Les cotisations sont rembourées par l'assurance maladie de base</h5>
            </div>
            <div className={classes.HowItWorks}>
                <div className={classes.HowItWorksItem}>
                    <div style={{maxWidth: 48}}><img src={ContactIcon}/></div>
                    <div style={{textAlign: 'center'}}>
                        Appelez nous au <a style={{color: "#fff", textDecoration: 'underline'}} href="tel:+41327214933">+41 32 721 49 33</a> (ou bien vous pouvez <Link style={{color: "#fff", textDecoration: 'underline'}} to="/reservation">réservez une consultation</Link> sur notre site web).
                    </div>
                </div>
                <div className={classes.HowItWorksItem}>
                    <div style={{maxWidth: 48}}><img src={CalendarIcon}/></div>
                    <div style={{textAlign: 'center'}}>
                        Dépendamment de vos besoins, on fixera un rendez-vous avec un thérapeute adapté spécialement pour vous.
                    </div>
                </div>
                <div className={classes.HowItWorksItem}>
                    <div style={{maxWidth: 48}}><img src={CheckIcon}/></div>
                    <div style={{textAlign: 'center'}}>
                        Rencontrez votre specialiste et entrez sur le chemin de la guerrison. Des questions? Laisse nous savoir comment on peut vous assister.
                    </div>
                </div>
            </div>
        </div>


    </div>
)