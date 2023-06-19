import React from 'react'
import { navigateTo } from 'gatsby-link'
import Button from '../../Button/Button'

export default ({clicked}) => (
    <div style={{backgroundColor: '#F6F6F6'}}>
        <div style={{maxWidth: 700, padding: '60px 20px', margin: 'auto', textAlign: 'center'}}>
            <h2 style={{marginBottom: 16}}>Why wait to feel better?</h2>
            <div>
                <p>Book an appointment to start a positive change in your life.</p>
                <div>
                    <Button color="primary" text="Book Online" clicked={() => navigateTo('/en/booking')}/>
                    <a className=""
                        href="tel:+16132525227"
                        style={{marginLeft: 20}}
                    ><Button color="secondary" text="613-252-5227"/></a>
                </div>
            </div>
        </div>

    </div>
)

