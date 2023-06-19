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
        domaine: 'Psychothérapie/ Consultation Individuelle'
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
            pathname: '/reservation',
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
                }}>Formulaire de rendez-vous</div>
                <div className={classes.FormBody}>
                    <div style={{marginBottom: 10}}>
                        <div>Prénom(s)</div>
                        <input name="firstName" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div>Nom(s)</div>
                        <input name="lastName" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div>Téléphone</div>
                        <input name="phoneNumber" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 10}}>
                        <div>Courriel</div>
                        <input name="email" className={classes.InputStyle} onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div style={{marginBottom: 20}}>
                        <div>Domaine</div>
                        <select name="domaine" className={classes.SelectInput} style={{backgroundImage: `url(${ArrowDown})`}} onChange={(e) => this.handleInputChange(e)}>
                            <option value="Thérapie Individuelle">Thérapie Individuelle</option>
                            <option value="Thérapie de Couple">Thérapie de Couple</option>
                            <option value="Thérapie Familiale">Thérapie Familiale</option>
                            <option value="Téléthérapie">Téléthérapie</option>
                        </select>
                    </div>
                    <div>
                        <Button color="primary" text="Prendre rendez-vous" styles={styles} clicked={this.handleLeadFormClicked}/>
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