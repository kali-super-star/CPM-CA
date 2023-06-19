import React from 'react'
import Link from 'gatsby-link'

import classes from '../Content.module.css'
import SideImage from '../../../images/services-image.jpg'

export default () => (
    <div className={classes.BenefitsWrapper}>
        <div style={{maxWidth: 585, padding: '40px 20px', margin: 'auto'}} className={classes.BenefitsTextWrapper}>
            <h2 style={{marginBottom: 40}}>C’est quoi les bénéfices d’une thérapie?</h2>
            <div style={{width: 100, height: 2, backgroundColor: '#1689DF', marginBottom: 40}}></div>
            <div>
                <p>
                    Parfois, il est plus facile de parler à un étranger qu'à des parents ou des amis mais encore mieux à un professionnel. Pendant une thérapie, un conseiller ou un thérapeute formé vous écoute et vous aide à trouver vos propres réponses aux problèmes, avec empathie sans vous juger.
                </p>
                <p>
                    Le thérapeute vous donnera le temps de parler, pleurer, crier ou simplement de penser. C'est l'occasion de regarder différemment vos problèmes avec quelqu'un qui va vous respecter vous et vos opinions.
                </p>
            </div>
        </div>
        <div className={classes.BenefitsImage} style={{backgroundImage: `url(${SideImage})`}}>

        </div>
    </div>
)

