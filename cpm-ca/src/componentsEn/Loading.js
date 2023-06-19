import React from 'react'

import LoadingIcon from '../images/loading-icon.gif'

export default ({size}) => <div style={{maxWidth: size}}>
    <img src={LoadingIcon} alt="Loading Icon" style={{ width:'100%'}} />
</div>