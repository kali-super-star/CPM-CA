import React from 'react'
import Link from 'gatsby-link'
import recordMobileCall from '../../../utils/google_conversion_mobile_call'

import classes from '../Content.module.css'

export default () => (
    <div style={{backgroundColor: 'rgb(246, 246, 246)'}}>
        <div style={{maxWidth: 1170, padding: '40px 20px', margin: 'auto', textAlign: 'center'}}>
            <h2 style={{marginBottom: 40}}>Comment commencer?</h2>
            <div className={classes.GetStartedWrapper}>
                <div className={classes.GetStartedItem} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Number>1</Number>
                    <p>Appelez-nous au <span onClick={() => recordMobileCall()}><a href="tel:+16132525227">613-252-5227</a></span> (ou <Link to="/reservation">réservez en ligne</Link>) et dites-nous ce qui vous pose problème.</p>
                </div>
                <div className={classes.GetStartedItem} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Number>2</Number>
                    <p>Nous fournissons la disponibilité avec des thérapeutes spécifiquement adaptés à vos besoins.</p>
                </div>
                <div className={classes.GetStartedItem} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Number>3</Number>
                    <p>Rencontrez votre thérapeute et commencez la route pour vous améliorer.</p>
                </div>
            </div>
        </div>
    </div>
)

const Number = ({children}) => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: '50%',
        color: '#fff',
        backgroundColor: '#4cae4c',
        marginBottom: 20,
        fontSize: '1.5rem'
    }}>{ children }</div>
)