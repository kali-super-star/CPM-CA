import React, { Component } from 'react'
import ExtendedForm from '../components/Forms/ExtendedForm'
import Helmet from 'react-helmet'

export default class extends Component {

    render() {

        let formData;
        if(this.props.location.data) {
            formData = this.props.location.data.state
        }
        return (
            <div>
                <Helmet>
                    <html lang="fr"/>
                    <title>Pendre un rendez-vous avec le CPM en ligne</title>
                    <meta name="description" content="Utilisez notre formulaire de réservation de rendez-vous en ligne et on vous contactera dans moins de 24hrs pour fixer un rendez-vous."/>
                </Helmet>
                <div style={{maxWidth: 1170, padding: '40px 20px', margin: 'auto'}}>
                    <div>
                        <ExtendedForm formData={formData}/>
                    </div>

                </div>

            </div>
        )
    }
}