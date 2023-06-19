import React from 'react'
import Link from 'gatsby-link'

import CallIcon from '../../images/fill-form-icon.svg'

export default () => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4cae4c',
        height: 58,
        width: 58,
        padding: '18px 12px 8px',
        position: 'fixed',
        bottom: 20,
        right: 'calc(20px + 58px + 10px)',
        borderRadius: '50%'
    }}>
        <Link to="/reservation">
            <img src={CallIcon} style={{width: 34, margin: 0}}/>
        </Link>
    </div>
)

