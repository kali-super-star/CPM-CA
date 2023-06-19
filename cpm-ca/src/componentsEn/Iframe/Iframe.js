import React from 'react'
import Iframe from 'react-iframe'

export default ({width, height, src}) => (
    <Iframe
            width={width}
            height={height}
            url={src}
            display="initial"
            position="relative"
            allowFullScreen/>
)