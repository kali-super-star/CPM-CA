import React from 'react'
import countMobileCallConversion from '../../utils/google_conversion_mobile_call'

import CallIcon from '../../images/call-icon.svg'

export default () => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF7F00',
        height: 58,
        width: 58,
        padding: '18px 12px 8px',
        position: 'fixed',
        bottom: 20,
        right: 20,
        borderRadius: '50%'
    }} onClick={() => {
        if(window.gtag) {
            gtag('event', 'conversion', {
                'send_to': 'AW-997202270/gOfzCM28rYQBEN6ywNsD'
            });
            console.log('oui')
        }
        else {
            console.log('non')
        }
    }}>
       <a href="tel:+16132525227">
           <img src={CallIcon} style={{width: 34, margin: 0}}/>
       </a>
    </div>
)

