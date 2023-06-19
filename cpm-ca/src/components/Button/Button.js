import React from 'react'

import classes from './Button.module.css'

export default ({ color, text, clicked, styles, loading, disabled = false }) => {

    let buttonStyles = [classes.Button]
    if( color === 'primary') {
        buttonStyles = [classes.Button, classes.Primary].join(' ')
    }

    if( color === 'primary' && loading ) {
        buttonStyles = [classes.Button, classes.PrimaryButtonLoading].join(' ')
    }

    if( color === 'primary' && disabled ) {
        buttonStyles = [classes.Button, classes.PrimaryButtonDisabled].join(' ')
    }

    if( color === 'secondary') {
        buttonStyles = [classes.Button, classes.Secondary].join(' ')
    }

    if( color === 'transparent') {
        buttonStyles = [classes.Button, classes.Transparent].join(' ')
    }

    return (
        <button
            className={buttonStyles}
            onClick={clicked}
            style={styles}
            disabled={loading ? loading : disabled}>
            {loading ? "Chargement..." : text}
        </button>
    )
}