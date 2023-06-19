import React, { Component } from 'react'
import ExtendedForm from '../../componentsEn/Forms/ExtendedForm'
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
                    <html lang="en"/>
                    <title>Book an Appointment Online with the CPM</title>
                    <meta name="description" content="Use ou appointment form to book your appointment online. We will contact you in less than 24 hours to schedule a session."/>
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