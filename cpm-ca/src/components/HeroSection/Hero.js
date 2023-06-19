import React from 'react'
import { navigateTo } from 'gatsby-link'
import ReactPlayer from 'react-player'
import Button from '../Button/Button'
import LeadForm from '../Forms/LeadForm'

import countMobileCallConversion from '../../utils/google_conversion_mobile_call'

import Mozaique from './Mozaique'
import MozaiqueStyles from './Mozaique.module.css'
import { HERO_VIDEO_FR } from '../../constants/videos'

const HeroSection = (props) => {
    return (
        <Mozaique {...props}>
            <div  className={MozaiqueStyles.Wrapper}>
                <div className={MozaiqueStyles.InnerContentLeft}>
                    <h1 className={MozaiqueStyles.H1}>Service de Counselling et Thérapie </h1>
                    <div className={MozaiqueStyles.SubH1}>Découvrez comment le CPM peut vous aider</div>

                    <div className={MozaiqueStyles.VideoWrapper}>
                        <ReactPlayer
                            url={HERO_VIDEO_FR}
                            config={{
                                wistia: {
                                    options: {
                                        playerColor: "#1689DF"
                                    }
                                }
                            }}
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <div style={{fontSize: '0.8rem', padding: '10px 0 0'}} className={MozaiqueStyles.VideoFooterText}>
                        <div style={{
                            fontSize: '0.9rem',
                            backgroundColor: "#04040487",
                            padding: '0 10px',
                            fontWeight: 500,
                            display: 'inline-block',
                        }}>Nos consultations peuvent être partiellement remboursées par certaines assurances.</div>
                        <div style={{
                            backgroundColor: "#04040487",
                            padding: '0 10px',
                            display: 'inline-block',
                        }}>Les places sont limitées due à la forte demande des services de consultation.</div>
                    </div>
                </div>

                <div style={{padding: 10, position: props.position, top: props.top}} className={MozaiqueStyles.FullLeadForm}>
                    <LeadForm {...props}/>
                </div>
                <MobileHeroCallToAction { ...props }/>

            </div>
        </Mozaique>
    )
}

const MobileHeroCallToAction =(props) => (
    <div style={{textAlign: 'center', padding: 20}} className={MozaiqueStyles.MobileCallToAction}>
        <Button color="primary" text="Réservez une Consultation en Ligne" clicked={() => navigateTo('/reservation')} styles={buttonStyles}/>
        <div style={{padding: 10}}>
            <h4 style={{color: "#fff", marginBottom: 10, fontSize: '0.9rem'}}>Ou appelez nous maintenant</h4>
            {/*<h1 style={{margin: 0}} className={MozaiqueStyles.H1Call}><a style={{color: "#FF7F00", textDecoration: 'underline'}} href="tel':+16135555555">613-555-5555</a></h1>*/}
            <a href="tel:+16132525227" onClick={() => {
                countMobileCallConversion()
            }}><Button color="secondary" text="613-252-5227" styles={buttonStyles} clicked={() => countMobileCallConversion()}/></a>
        </div>
        <div style={{fontSize: '0.7rem', padding: '10px 0 0', color:'#fff'}}>
            <div style={{
                fontSize: '0.9rem',
                backgroundColor: "#04040487",
                padding: '4px 10px 0',
                fontWeight: 500,
            }}>Nos consultations peuvent être partiellement remboursées par certaines assurances.</div>
            <div style={{
                backgroundColor: "#04040487",
                padding: '0 10px 4px',
            }}>Les places sont limitées dues à la forte demande des services de consultation. </div>
        </div>
    </div>
)

const buttonStyles = {
    padding: 10,
    minWidth: 200
}


export default HeroSection