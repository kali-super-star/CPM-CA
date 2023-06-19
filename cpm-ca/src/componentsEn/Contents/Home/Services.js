import React from 'react'

import classes from '../Content.module.css'

import ArrowRight from '../../../images/arrow-right.svg'

export default () => (
    <div style={{backgroundColor: '#f6f6f6'}}>
        <div  style={{maxWidth: 1170, padding: '40px 20px', margin: 'auto', display: 'flex'}} className="">
            <div className={classes.ServiceWrapper}>
                <h1 style={{margin: '0 0 10px 0'}}>Therapeutic Services</h1>
                <h4>Discover what's best for you</h4>
                <div style={{width: 100, height: 2, backgroundColor: '#1689DF', marginBottom: 40}} />
                <p style={{textAlign: 'left'}}>
                    Our team takes pride in helping you. Our expertise spans the spectrum of psychological problems and conditions, from the most basic to the most complex. This includes:
                </p>
                <div className={classes.ServiceList}>
                    <ul>
                        <li><img src={ArrowRight}/> Anxieties</li>
                        <li><img src={ArrowRight}/> Phobias and fears</li>
                        <li><img src={ArrowRight}/> Relationship difficulties</li>
                        <li><img src={ArrowRight}/> Depressions</li>

                    </ul>
                    <ul>
                        <li><img src={ArrowRight}/> Family problems</li>
                        <li><img src={ArrowRight}/> Burnout</li>
                        <li><img src={ArrowRight}/> Professional difficulties</li>
                        <li><img src={ArrowRight}/> Identity concerns</li>
                    </ul>
                    <ul>

                        <li><img src={ArrowRight}/> Traumas</li>
                        <li><img src={ArrowRight}/> Lack of self-esteem</li>
                        <li><img src={ArrowRight}/> Addictions</li>
                    </ul>
                </div>
                <p>
                    The above list is not exhaustive, and we will gladly do our best to help you in your difficulties.
                </p>
            </div>


        </div>

    </div>
)

