import React from 'react'
import Button from '../../Button/Button'
import { navigateTo } from 'gatsby-link'


export default () => (
    <div style={{backgroundColor: '#1689DF', color:'#fff'}}>
        <div style={{
            maxWidth: 800,
            margin: 'auto',
            padding: '40px 20px',
            minHeight: 320,
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{textAlign: 'center'}}>We are there to help you</h1>
            <p style={{textAlign: 'center'}}>
                Our consultants work in full confidentiality and adapt their approach to your specific needs. Your therapy begins with you taking an appointment, which is the first step towards gradual change.

            </p>
            <Button color="transparent" text="TAKE AN APPOINTMENT" clicked={() => navigateTo('/en/booking')}/>
        </div>
    </div>
)