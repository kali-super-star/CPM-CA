import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

import Header from '../components/Header/Header'
import HeaderEnglish from '../componentsEn/Header/Header'

import FavIcon from '../images/cpm-favicon.png'

class Layout extends Component {
    static propTypes = {
        children: PropTypes.func,
        isMobile: PropTypes.bool,
        mobileMenu: PropTypes.bool,
    }

    state = {
        isMobile: false,
        mobileMenu: false,
        isLoading: true,
        gDeviceWidth: 1440,
    }

    componentDidMount() {
       this.setState({
           isMobile: window.innerWidth < 768,
           isLoading: false
       }, () => {
           window.addEventListener("resize", this.updateDeviceState)
       })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDeviceState)
    }

    updateDeviceState = () => {
        if(window.innerWidth >= 768) {
            this.setState({ isMobile: window.innerWidth < 768, mobileMenu: false, gDeviceWidth: window.innerWidth })
        } else {
            this.setState({ isMobile: window.innerWidth < 768, gDeviceWidth: window.innerWidth })
        }
    }


    render() {
        const { pathname } = this.props.location

        const headerStyles = {
            boxShadow: '2px 0 4px 0 rgba(184, 183, 183, 0.5)'
        }

        return (
            <div>
                <Helmet>
                    <link rel="icon" type="image/png" href={FavIcon} />
                    <script async={true} src="https://www.googletagmanager.com/gtag/js?id=UA-121097236-1" />
                    <script>{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'UA-121097236-1');
                        gtag('config', 'AW-997202270');
                        gtag('config', 'AW-997202270/qnv-CIfCnoQBEN6ywNsD', {
                        'phone_conversion_number': '613-252-5227'
                    });`}
                    </script>
                </Helmet>
                <div style={headerStyles}>
                    {pathname.substring(0, 3) === '/en'
                        ? <HeaderEnglish
                            {...this.state}
                            toggleMobileMenu={ () => this.setState({ mobileMenu: !this.state.mobileMenu }) }
                            closeMobileMenu={ () => {
                                this.setState({ mobileMenu: false })
                            }}
                        />
                        : <Header
                            {...this.state}
                            toggleMobileMenu={ () => this.setState({ mobileMenu: !this.state.mobileMenu }) }
                            closeMobileMenu={ () => {
                                this.setState({ mobileMenu: false })
                            }}
                        />
                    }

                </div>
                {this.props.children({...this.props, ...this.state})}
            </div>
        )
    }
}


export default Layout

