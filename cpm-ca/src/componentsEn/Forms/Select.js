import React from 'react'

import classes from './Forms.module.css'
import ArrowDown from '../../images/arrow_down-24px.svg'

export default ({styles,children, changed, name, value}) => (
    <select className={classes.SelectInput}
            style={{backgroundImage: `url(${ArrowDown})`}}
            name={name}
            value={value}
            onChange={changed}>
        {children}
    </select>
)