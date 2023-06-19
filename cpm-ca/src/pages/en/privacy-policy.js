import React from 'react'
import Footer from '../../componentsEn/Footer/Footer'
import Helmet from 'react-helmet'

export default () => (
    <div>
        <Helmet>
            <html lang="en" />
            <title>Privacy Policy of the CPM-CA.org</title>
        </Helmet>
        <div style={{maxWidth: 1170, padding: '20px', margin: 'auto'}}>
            <h1>Privacy Policy</h1>
            <h3>Terms of use and confidentiality</h3>
            <h5>This form is intended for adults domiciled in Canada with or without insurance.
            </h5>
            <p>
                <strong>1. Emergency</strong><br />
                In case of emergency, we recommend that you call your doctor or local emergency department immediately.
            </p>
            <p>
                <strong>2. Processing requests</strong><br />
                The appointment request is received by the Admissions Department of the CPM ( Psychotraumatology and Mediation Centre), which will contact you to propose a consultation date or, if necessary, ask you for additional information.
            </p>
            <p>
                <strong>3. Waiting Periods</strong><br />
                You will be contacted within 1 working day to receive an appointment proposal or, if necessary, to provide the service concerned with additional information. If you are not reachable within this time, we will try to contact you again for up to 5 business days. We invite you to contact us if we do not contact you within this time.
            </p>
            <p>
                <strong>4. Incomplete Applications</strong><br />
                The CPM reserves the right not to respond to any incomplete request.
            </p>
            <p>
                <strong>5. Personal contact details</strong><br />
                You will be contacted directly by telephone during office hours (9AM - 12PM & 1PM - 5PM) or by e-mail using the contact details you have provided. If you cancel or reschedule your first appointment with less than 48 hours notice, or if you do not show up, you will be charged the full amount of the consultation.
            </p>
            <p>
                <strong>5. Confidentiality</strong><br />
                By sending your contact details (telephone, e-mail, postal address), you authorise the CPM to send you, at these details, confidential information concerning your appointment request. We draw your attention to the fact that unauthorized persons, especially those around you, do not have access to these coordinates. The CPM cannot be held responsible if confidential information communicated by means of your personal contact details should be seen by unauthorised persons.
            </p>
            <p>
                <strong>6. Data protection</strong><br />
                The protection of the privacy of patients whose personal data are processed within our institution is a legal obligation. Federal and cantonal legislation on medical confidentiality and data protection obliges us to protect personal data against misuse. The CPM shall take all necessary measures to avoid unlawful processing of patient data.
            </p>
            <p>
                <strong>I hereby confirm that I have read and understood the above terms of use.</strong>
            </p>
            <p>
                <strong>
                    I agree to take the necessary measures to prevent unauthorized persons from having access to the information that the Psy-Scan Institute will transmit to me by means of my personal contact details.
                </strong>
            </p>
            <p>
                <strong>
                    The CPM cannot be held liable in the event of non-compliance by the applicant with the above rules of use.
                </strong>
            </p>
        </div>

        <Footer/>

    </div>
)


