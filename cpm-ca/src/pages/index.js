import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Carousel from '../components/Carousel/Carousel'
import HomePage from '../components/Contents/Home/HomePage'

import MoreInfoSection from '../components/Contents/Home/MoreInfo'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/Hero'

import Services from '../components/Contents/Home/Services'
import WhyUs, { TherapieIndividuelle, PsychoEducation, TherapieCouple, TherapieFamille } from '../components/Contents/Home/WhyUs'
import Listen from '../components/Contents/Home/Listen'
import HowToGetStarted from '../components/Contents/Home/HowToGetStarted'
import Benefits from '../components/Contents/Home/Benefits'
import GetStarted from '../components/Contents/Home/GetStarted'

import MobileActions from '../components/MobileActions/MobileActions'

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
                    <html lang="fr"/>
                    <title>Psychologue Ottawa et Gatineau - Psychothérapie et Counselling en Anglais et Français</title>
                    <meta name="description" content="Traversez-vous des épreuves difficiles? Si oui, vous n'êtes pas seul. Faites le premier pas vers le chemain du bien être en parlant à un professionel qui vous aidera à regagner control et ..."/>
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


