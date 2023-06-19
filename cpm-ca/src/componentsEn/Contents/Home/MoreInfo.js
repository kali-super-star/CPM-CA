import React from 'react'
import { navigateTo } from 'gatsby-link'
import Iframe from '../../Iframe/Iframe'
import Button from '../../Button/Button'
import recordMobileCall from '../../../utils/google_conversion_mobile_call'

import classes from '../Content.module.css'

import Orloge from '../../../images/icon-orloge.png'

export default ({ isMobile, history }) => (
    <div style={{backgroundColor: '#4D4D4D'}}>
        <div style={{maxWidth: 1170, padding: '40px 20px', margin: 'auto'}}>
            <div className={classes.MoreInfoWrapper}>
                <div className={classes.MoreInfoItem}>
                    <div className={classes.MoreInfoItemBody}>
                        <Iframe width="100%" height="240px" src={'https://www.google.com/maps/embed/v1/place?key=AIzaSyD5d58sVD8JymoPG0mWxmQP8glK9_m9cI4&q=427+McArthur+Ave,Ottawa,ON'}/>
                    </div>
                </div>
                <div className={classes.MoreInfoItem} style={{backgroundColor: '#fff', marginBottom: `${isMobile ? '20px' : 0 }` }}>
                    <div className={classes.MoreInfoItemTitle}>Take an Appointment</div>
                    <div className={classes.MoreInfoItemBody} style={{padding: 20}}>
                        <h2 style={{margin: 0}} className={classes.PhoneNumberInfo}>
                            <a href="tel:+16132525227" target="_blank" style={{textDecoration: 'underline'}} onClick={() => recordMobileCall()}>613-252-5227</a>
                        </h2>
                        <h5 style={{color: "#92c83a", marginBottom: 10}}>• Line Available</h5>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button text="Book Online" color="primary" clicked={() => navigateTo('/en/booking')}/>
                        </div>
                    </div>
                </div>
                <div className={classes.MoreInfoItem} style={{
                    backgroundImage: `url(${Orloge})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top right', backgroundColor: '#fff'
                }}>
                    <div className={classes.MoreInfoItemTitle}>Consultation Schedules</div>
                    <div className={classes.MoreInfoItemBody} style={{padding: 20}}>
                        <p className={classes.Horaire}>Monday to Friday: <br /><strong>9AM to 12PM</strong> et <strong>1PM ro 5PM</strong> <br />
                            Closed on weekends</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
)

