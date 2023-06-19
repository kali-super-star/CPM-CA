import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Carousel from '../../componentsEn/Carousel/Carousel'
import HomePage from '../../componentsEn/Contents/Home/HomePage'

import MoreInfoSection from '../../componentsEn/Contents/Home/MoreInfo'
import Footer from '../../componentsEn/Footer/Footer'
import HeroSection from '../../componentsEn/HeroSection/HeroOttawa'

import Services from '../../componentsEn/Contents/Home/Services'
import WhyUs, { TherapieIndividuelle, PsychoEducation, TherapieCouple, TherapieFamille } from '../../componentsEn/Contents/Home/WhyUs'
import Listen from '../../componentsEn/Contents/Home/Listen'
import HowToGetStarted from '../../componentsEn/Contents/Home/HowToGetStarted'
import Benefits from '../../componentsEn/Contents/Home/Benefits'
import GetStarted from '../../componentsEn/Contents/Home/GetStarted'

import MobileActions from '../../componentsEn/MobileActions/MobileActions'

export default class extends Component {
    state = {
        isMobile: false,
        windowWidth: null,
        isLoading: true,
        scrollPosition: 0
    }

    componentDidMount() {

        this.setState({
            isMobile: window.innerWidth < 768,
            windowWidth: window.innerWidth,
            isLoading: false
        }, () => {
            window.addEventListener("resize", this.updateDeviceState)
            window.addEventListener("scroll", this.updateScrollPosition)
        })
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDeviceState)
        window.removeEventListener("scroll", this.updateScrollPosition)
    }

    updateDeviceState = () => this.setState({ isMobile: window.innerWidth < 768, windowWidth: window.innerWidth})
    updateScrollPosition = () => this.setState({ scrollPosition: window.scrollY})

    render() {

        return (
            <div>
                <Helmet>
                    <html lang="en" />
                    <title>Psychologists and Therapists in Ottawa - Gatineau Region</title>
                    <meta name="description" content="Are you going through hard times? If so, you are not alone. Take the first step towards well-being by talking to a professional who will help you regain control and ..."/>
                </Helmet>
                <HeroSection {...this.state } {...this.props}/>

                <Carousel/>
                <HomePage/>
                <Services/>
                <WhyUs/>
                <Listen/>
                <TherapieIndividuelle/>
                <TherapieCouple/>
                <TherapieFamille/>
                <PsychoEducation/>
                <HowToGetStarted/>
                <Benefits/>
                <GetStarted/>

                <MoreInfoSection isMobile={this.state.isMobile} { ...this.props }/>
                <Footer/>
                {this.state.scrollPosition > 600
                    ? <MobileActions/>
                    : null
                }

            </div>
        )

    }
}


