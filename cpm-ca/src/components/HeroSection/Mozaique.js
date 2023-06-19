import React, { Component} from 'react'


import ImageMobile from '../../images/mozaique-mobile.png'
import ImageDesktop from '../../images/mozaique.png'

export default class extends Component {

    render() {
        const { isMobile, windowWidth } = this.props
        return (
            <div style={{
                backgroundImage: `url(${ windowWidth < 842 ? ImageMobile : ImageDesktop})`,
                boxShadow: "inset 0 0 0 10000px rgba(0,0,0,.65)",
                backgroundSize: "cover",
                backgroundPosition: "center",

            }}>
                {this.props.children}
            </div>
        )
    }
}
