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
            So impressed with this service. The psychotherapist listen attentively and responds with clarity, experience and calmness. For me, the connection was immediate and relaxing during a trying time. Many thanks !!
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="Matt Gervais picture"/> Matt Gervais, Rockland
        </div>
    </div>
)

const TestimonialItem2 = () => (
    <div style={{padding: "20px 20px 10px"}}>
        <em>
            I would not have been here without the CPM constant help and guidance. Thank you !
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="Audrey Pirker review, picture"/> Audrey Pirker, Ottawa
        </div>
    </div>
)


const TestimonialItem3 = () => (
    <div style={{padding: "20px 20px 10px"}}>
        <em>
            I like CPM. I found an excellent practitioner there, highly knowledgeable in her field. She was patient and extremely kind. I credit her with her very sharp observations of my issues in the relatively limited time we spent together. Overall going there was a good decision.
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="David Schmid picture"/> David Schmid, Ottawa
        </div>
    </div>
)

const TestimonialItem4 = () => (
    <div style={{padding: "20px 20px 10px"}}>
        <em>
            I found them to be very supportive at a time when I felt the whole world was against me. Going there has been extremely helpful and I appreciate that my therapist was challenging my negative thoughts about myself.
        </em>
        <div style={{padding: '20px 0 0', display: 'flex', alignItems: 'center'}}>
            <AvatarImage alt="Jennifer Ballard picture"/> Jennifer Ballard, Ottawa
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
                <div><TestimonialItem4 /></div>

            </Slider>
        );
    }
}