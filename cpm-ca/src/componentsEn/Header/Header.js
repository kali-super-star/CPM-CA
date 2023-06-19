import React from 'react'
import CallToAction from '../CallToAction'
import countMobileCallConversion from '../../utils/google_conversion_mobile_call'
import classes from './Header.module.css'
import Logo from '../Logo/Logo'

const Header = () => {

    return (
        <div className={classes.HeaderWrapper}>
            <Logo />
            <div>
                <div className={classes.CallActionHeader}>
                    <div className={classes.CallTitle}>Call to Book an Appointment</div>
                    <a href="tel:+16132525227" className={classes.PhoneNumber} onClick={() => {
                        countMobileCallConversion()
                    }}><strong>613-252-5227</strong></a>
                    <div><strong><em>or</em></strong></div>
                    <div className={classes.ReserveOnlineMobile}><CallToAction/></div>
                </div>

            </div>

        </div>
    )
}

export default Header
