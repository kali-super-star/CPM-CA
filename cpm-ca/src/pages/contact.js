import React, { Component } from 'react'
import Link from 'gatsby-link'
import Footer from '../components/Footer/Footer'
import Iframe from '../components/Iframe/Iframe'
import Helmet from 'react-helmet'



import classes from '../layouts/Pages.module.css'

export default class extends Component {

    render() {
        const { gDeviceWidth: deviceWidth } = this.props
        return (
            <div>
                <Helmet>
                    <html lang="fr"/>
                    <title>Contactez nous au 613-252-5227 ou prenez un rendez-vous en ligne.</title>
                    <meta name="description" content="Nous sommes ouver du Lundi au Vendredi de 9AM à 12PM et de 1PM à 5PM. N'ésitez pas à nous contactez pour prendre un rendez-vous ou pour plus d'information. "/>
                </Helmet>
                <div>
                    <div style={{maxWidth: 1170, padding: '20px', margin: 'auto'}}>
                        <div className={classes.Address}>
                            <div className={classes.AddressBock} style={{display: 'flex', alignItems: 'center', padding: 0}}>
                                <div>
                                    <h1>Nous joindre</h1>
                                    <p>
                                        <strong>CPM: Centre de Psychotromatology et Mediation</strong><br />
                                        <span style={{color: '#1689DF'}}>Lundi - Vendredi: 9AM - 12PM & 1PM - 5PM</span>
                                        <br />
                                        427 McArthur Ave, 2e Etage, Suite #3<br />
                                        Ottawa (ON) K1K 1G5, Canada<br />
                                        Tél. <a href="tel:+16132525227">+1 (613) 252-5227</a><br />
                                        E-mail: <a href="mailto:info@cpm-ca.org">info@cpm-ca.org</a><br />
                                        <Link to="/reservation"><em><strong>ou Prenez rendez-vous en ligne</strong></em></Link>
                                    </p>
                                </div>

                            </div>
                            <div className={classes.AddressBockMap}>
                                <div>
                                    <Iframe width="100%" height={`${deviceWidth > 767 ? "400px" : '300px' }`} src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyD5d58sVD8JymoPG0mWxmQP8glK9_m9cI4&q=427+McArthur+Ave,Ottawa,ON'}/>
                                </div>
                            </div>
                        </div>
                        <div className={classes.Cancellation}>
                            <div className={classes.CancellationItem}>
                                <h2>Annuler un rendez-vous</h2>

                                <p>
                                    Si vous annulez ou déplacez votre premier rendez-vous avec un préavis de moins de 48 heures,
                                    ou si vous ne vous présentez pas, vous serez facturé le montant total de la consultation.
                                </p>
                            </div>
                            <div className={classes.CancellationItem}>
                                <h2>Remboursement</h2>
                                <p>
                                    Toutes nos consultations peuvent être partiellement ou totallement remboursées par certaines assurances.
                                    Pour plus d'information veuillez prendre contact avec le secrétariat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        )
    }
}

