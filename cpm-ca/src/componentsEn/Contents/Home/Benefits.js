import React from 'react'
import classes from '../Content.module.css'
import SideImage from '../../../images/services-image.jpg'

export default () => (
    <div className={classes.BenefitsWrapper}>
        <div style={{maxWidth: 585, padding: '40px 20px', margin: 'auto'}} className={classes.BenefitsTextWrapper}>
            <h2 style={{marginBottom: 40}}>What are the benefits of therapy?</h2>
            <div style={{width: 100, height: 2, backgroundColor: '#1689DF', marginBottom: 40}}/>
            <div>
                <p>
                    It is often easier to talk to strangers than to relatives or friends. During therapy, a qualified counselor or therapist listens to you and helps you find your own answers to problems, without judging you.
                </p>
                <p>
                    The therapist will give you time to talk, cry, scream or just think. This is an opportunity to look at your problems differently with someone who will respect you and your opinions.
                </p>
            </div>
        </div>
        <div className={classes.BenefitsImage} style={{backgroundImage: `url(${SideImage})`}}>

        </div>
    </div>
)

