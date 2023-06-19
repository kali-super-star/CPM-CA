import React, { Component } from 'react'
import Slider from "react-slick";


import './carousel.scss'
import Avatar from '../../images/account-circle.svg'
export default class extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#1689DF', color: '#fff'}}>
                <div style={{maxWidth: 1170, padding: '20px 20px 40px', margin: 'auto'}}>
                    <SimpleSlider />
                </div>
            </div>


        );
    }
}
const AvatarImage = ({ alt }) => (
    <img src={Avatar} alt={alt} style={{with: 44, height: 34, marginRight: 6, marginBottom: 0}}/>
)

const TestimonialItem1 = () => (
    <div style={{padding: "20px 20px 10px"}}>
        <em>
            Aller au CPM a changé ma vie plus que toute autre chose que j'ai jamais faite. Pendant longtemps, j'ai cru que je n'avais pas de problèmes qui méritaient de l'attention.
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="avis de Sephanie, Vanier, Ottawa"/> Stéphanie Richelieu, Vanier
        </div>
    </div>
)

const TestimonialItem2 = () => (
    <div style={{padding: "20px 20px 10px"}}>
        <em>
            Ils m'ont vraiment aidé à surmonter mon anxiété. La thérapeute était vraiment à mon écoute.
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="avis de Eryn Zannier, Orleans"/> Eryn Zannier, Orleans
        </div>
    </div>
)


const TestimonialItem3 = () => (
    <div style={{padding: "20px 20px 10px"}}>
        <em>
            Extrêmement utile! Je suis tellement reconnaissante pour leur aide.
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="avis de Justin Gravel , Ottawa"/> Justin Gravel , Ottawa
        </div>
    </div>
)


class SimpleSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            dotsClass: 'slick-dots'
        };
        return (
            <Slider {...settings}>
                <div><TestimonialItem1 /></div>
                <div><TestimonialItem2 /></div>
                <div><TestimonialItem3 /></div>

            </Slider>
        );
    }
}