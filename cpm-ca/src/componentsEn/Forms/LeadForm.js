import React from 'react'
import { navigateTo } from 'gatsby-link'

import Button from '../Button/Button'

import classes from './Forms.module.css'

import ArrowDown from '../../images/arrow_down-24px.svg'

export default class extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        domaine: 'Individual Therapy'
    }

    handleInputChange = (e) => {
        const state = {...this.state}
        state[e.target.getAttribute('name')] =  e.target.value
        this.setState({
            ...state
        })
    }

    handleLeadFormClicked = () => {
        navigateTo({
            pathname: '/en/booking',
            data: {
                from: 'homepage',
                state: this.state
            }
        })
    }

    render() {

        return (
            <div className={classes.FormWrapper}>
                <div style={{
                    textTransform: 'uppercase',
                    backgroundColor: '#0071BC',  color: 'white',
                    height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>Appointment Form</div>
                <div className={classes.FormBody}>
                    <div style={{marginBottom: 10}}>
                        <div>First Name(s)</div>
                        <input name="firstName" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div>Surname(s)</div>
                        <input name="lastName" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div>Phone Number</div>
                        <input name="phoneNumber" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div>Email</div>
                        <input name="email" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 20}}>
                        <div>Domain</div>
                        <select name="domaine" className={classes.SelectInput} style={{backgroundImage: `url(${ArrowDown})`}} onChange={(e) => this.handleInputChange(e)}>
                            <option value="Individual Therapy">Individual Therapy</option>
                            <option value="Couple Therapy">Couple Therapy</option>
                            <option value="Family Therapy">Family Therapy</option>
                            <option value="Teletherapy">Teletherapy</option>
                        </select>
                    </div>
                    <div>
                        <Button color="primary" text="Book an Appointment" styles={styles} clicked={this.handleLeadFormClicked}/>
                    </div>
                </div>

            </div>
        )
    }
}

const styles = {
    width:"100%",
    borderRadius: 0
}