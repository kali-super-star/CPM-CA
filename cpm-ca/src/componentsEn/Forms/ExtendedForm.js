import React, { Component } from 'react'
import axios from 'axios'

import recordMobileCall from '../../utils/google_conversion_mobile_call'
import Input from './Input'
import Select from './Select'
import Button from '../Button/Button'
import ToolTip from '../ToolTip/ToolTip'

import CheckIcon from '../../images/check_circle_outline-24px.svg'

import classes from './Forms.module.css'

function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };

    gtag('event', 'Form', 'submit', 'English')
    return false;
}

export default class extends Component {
    state = {
        step: 1,
        isLoading: false,
        backBtnDisabled: false,
        formData: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            country: 'Canada',
            dateOfBirth: '',
            gender: 'Female',
            domaine: 'Individual Therapy',
            desiredCallTime: '9AM - 12:15PM',
            desiredConsultationTime: 'Earliest available',
            termsAccepted: false,
            cancellationPolicy: false,
        },
        formDataErrors: {
            stepOne: {
                firstNameError:false,
                lastNameError:false,
                phoneNumberError:false,
                emailError:false,
                addressError:false,
                cityError:false,
                postalCodeError:false,
                countryError:false,
                dateOfBirthError:false,
            },
            // step 3
            stepTwo: {
                termsAcceptedError:false,
                cancellationPolicyError: false,
            }
        },
        serverError: false
    }

    componentDidMount() {
        if(this.props.formData) {
            const data = {...this.state.formData}
            this.setState({
                ...this.state,
                formData: {
                    ...data,
                    ...this.props.formData
                }
            })
        }
    }

    handleNextStep = () => {
        this.setState({ isLoading: true, serverError: false, backBtnDisabled: true }, () => {
            setTimeout(() => {
                if(this.state.step === 1) {
                    const errors = this.checkErrorStepOne({ ...this.state.formData })
                    if(errors) {
                        const errorsData = { ...this.state.formDataErrors.stepOne }
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            backBtnDisabled: false,
                            formDataErrors: {
                                ...this.state.formDataErrors,
                                stepOne: {
                                    ...errorsData,
                                    ...errors,
                                }
                            }
                        })
                    } else {
                        this.setState({step: this.state.step + 1, isLoading: false, backBtnDisabled: false})
                    }
                }

                else if (this.state.step === 2) {
                    const possibleErrors = {
                        termsAcceptedError: this.state.formData.termsAccepted === false,
                        cancellationPolicyError: this.state.formData.cancellationPolicy === false
                    }
                    const errors = this.checkErrors(possibleErrors)
                    if(errors) {
                        const errorsData = { ...this.state.formDataErrors.stepTwo }
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            backBtnDisabled: false,
                            formDataErrors: {
                                ...this.state.formDataErrors,
                                stepTwo: {
                                    ...errorsData,
                                    ...errors,
                                }
                            }
                        })
                    } else {

                         // url = https://cpm.tophealth.ca/leads/new-lead
                        let prefix = 'Mr.'
                        if(this.state.formData.gender === 'Feminin') {
                            prefix = 'Mrs'
                        }

                        // const API_ENDPOINT = `https://app.sendsync.net/leads/new-lead`
                        const API_ENDPOINT = `https://us-central1-cpm-ca.cloudfunctions.net/cpmca/new-lead`

                        axios.post(API_ENDPOINT, { ...this.state.formData, language: 'English', prefix: prefix })
                            .then( () => {
                                this.setState({step: this.state.step + 1, isLoading: false, backBtnDisabled: false}, () => {
                                    if(window.gtag) {
                                        window.gtag('event', 'conversion', {
                                            'send_to': 'AW-997202270/rJKCCPu4noQBEN6ywNsD',
                                        });

                                        window.gtag('event', 'submit', {
                                            'event_category': 'Form',
                                            'event_label': 'English'
                                        })
                                    }
                                } )

                            })
                            .catch(err => {
                                this.setState({isLoading: false, serverError: true, backBtnDisabled: false})
                            }
                        )
                    }
                }
            }, 2000)
        })
    }

    handleBackStep = () => {
        if(this.state.step > 1) this.setState({ step: this.state.step - 1})
    }


    handleInputChange = (e) => {

        const form = {...this.state.formData}
        form[e.target.getAttribute('name')] = e.target.getAttribute('name') === 'termsAccepted' || e.target.getAttribute('name') === 'cancellationPolicy' ? e.target.checked : e.target.value
        this.setState({
            ...this.state,
            formData: {
                ...form,
            }
        })

    }

    checkErrorStepOne = (stepOneData) => {
        const obj = {
            firstNameError: stepOneData.firstName.length < 1,
            lastNameError: stepOneData.lastName.length < 1,
            phoneNumberError: stepOneData.phoneNumber.length < 1,
            emailError: stepOneData.email.length < 1,
            addressError: stepOneData.address.length < 1,
            cityError: stepOneData.city.length < 1,
            postalCodeError: stepOneData.postalCode.length < 1,
            countryError: stepOneData.country.length < 1,
            dateOfBirthError: stepOneData.dateOfBirth.length < 1,
        }
        const errors = Object.keys(obj).filter(item => obj[item] === true)

        if(errors.length === 0 ) {
            return false
        } else {
            return obj
        }
    }
    checkErrors = (obj) => {
        const errors = Object.keys(obj).filter(item => obj[item] === true)

        if(errors.length === 0 ) {
            return false
        } else {
            return obj
        }
    }

    render() {
        const { step } = this.state
        return (
            <div style={{
                maxWidth: 730,
                backgroundColor: '#F8F8F8',
                margin: 'auto',
                marginBottom: 100
            }}>
                <div>

                    <FormHeader step={step} clicked={ (e) => {
                        const step =  parseInt(e.target.getAttribute('data-step'))
                        if(step < this.state.step) {
                            this.setState({step})
                        }
                    }}/>

                    { step === 1
                        ? <StepOne {...this.state} changed={ (e) => this.handleInputChange(e) }
                        />
                    : null }

                    { step === 2
                        ? <ReviewStep {...this.state}
                                   changed={ (e) =>  this.handleInputChange(e)}

                        />
                        : null
                    }


                    { step === 3
                        ? <ThankYou />
                        : null
                    }

                </div>

                <div style={{display: 'flex', justifyContent: `${step === 1 ? 'flex-end' : 'space-between'}`, padding: '20px'}}>
                    { step === 1 || step === 3
                        ? null
                        : <Button text="Back"
                                  styles={{backgroundColor: '#656565', border: '1px solid #656565', color: '#fff'}}
                                  clicked={this.handleBackStep} disabled={this.state.backBtnDisabled}/>
                    }

                    { step === 1
                        ? <Button text="Continue" color="primary" clicked={this.handleNextStep} loading={this.state.isLoading} />
                        : null
                    }

                    { step === 2
                        ? <Button text="Continue" color="primary" clicked={this.handleNextStep} loading={this.state.isLoading} />
                        : null
                    }

                </div>
                <div style={{padding: '0 20px 20px', fontSize: '1.4rem', lineHeight: 1.3}}>
                    {this.state.serverError
                        ? <RequiredError
                            text="We couldn't process your booking. Please try again, if the problem persist, Contact us at 613-252-5227 to book your appointment."/>
                        : null
                    }
                </div>
            </div>
        )
    }
}

const red = '#ff6d6b'
const green = "#00B648"
const darkBlue = "#004c92"
const blue = "#0071BC"


const RequiredError = ({text, size}) => <div style={{color: red, fontSize: `${size ? size : 'inherit'}`}}><small>{text ? text : 'Ce champ est obligatoire'}</small></div>

const FormHeader = ({step, clicked}) => {
    let title = "Patient Information"
    if(step === 2) title = "Confirmation"
    if(step === 3) title= "Thank you for submitting the form!"
    return (
        <div style={{
            display: 'flex',
            justifyContent: `${step === 4 ? 'center' : 'space-between' }`,
            height: 48, alignItems:'center',
            backgroundColor: '#0071BC',
            color: '#fff',
            padding: ' 0 20px'
        }}>
            <div>{title}</div>
            {step === 3
            ? null
            : <div>
                    <Progress step={step} clicked={clicked} />
                </div>
            }

        </div>
    )
}

const Progress = ({step, clicked}) => (
    <div style={{display: 'flex'}}>
        <div className={step === 1 ? [classes.ProgressItem, classes.Active].join(' ') : classes.ProgressItem}
            onClick={clicked} data-step="1">
            1</div>
        <div className={step === 2 ? [classes.ProgressItem, classes.Active].join(' ') : classes.ProgressItem}
            onClick={clicked} data-step="2">
            2</div>
    </div>
)


const StepOne = (props) => {
    const { formData, changed, formDataErrors: {stepOne: errors} } = props
    return (
        <div>
            <p style={{padding: '20px 20px 10px', fontSize: '0.9rem'}}>
                This form is only for persons residing in Canada. You can request an appointment online by completing the following form or by calling <span onClick={ () => recordMobileCall() }><a href="tel:+16132525227">613-252-5227</a></span>.
            </p>
            <div style={{padding: '0 20px 10px'}}>
                <div className={classes.FormRowWrapper }>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>First Name</div>
                        <Input value={formData.firstName} name="firstName" changed={changed} styles={{borderColor: `${errors.firstNameError ? red : 'inherit'}`}}/>
                        {errors.firstNameError ? <RequiredError/> : null}
                    </div>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Last Name</div>
                        <Input value={formData.lastName} name="lastName" changed={changed} styles={{borderColor: `${errors.lastNameError ? red : 'inherit'}`}}/>
                        {errors.lastNameError ? <RequiredError/> : null}
                    </div>
                </div>
            </div>
            <div style={{padding: '0 20px 10px'}}>
                <div className={classes.FormRowWrapper}>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Email</div>
                        <Input value={formData.email} name="email" changed={changed} styles={{borderColor: `${errors.emailError ? red : 'inherit'}`}}/>
                        {errors.emailError ? <RequiredError/> : null}
                    </div>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Phone Number</div>
                        <Input value={formData.phoneNumber} name="phoneNumber" changed={changed} styles={{borderColor: `${errors.phoneNumberError ? red : 'inherit'}`}}/>
                        {errors.phoneNumberError ? <RequiredError/> : null}
                    </div>
                </div>
            </div>
            <div style={{padding: '0 20px 10px'}}>
                <div className={classes.FormRowWrapper}>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Address</div>
                        <Input value={formData.address} name="address" changed={changed} styles={{borderColor: `${errors.addressError ? red : 'inherit'}`}}/>
                        {errors.addressError ? <RequiredError/> : null}
                    </div>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Country</div>
                        <Input value={formData.country} name="country" changed={changed} styles={{borderColor: `${errors.countryError ? red : 'inherit'}`}}/>
                        {errors.countryError ? <RequiredError/> : null}
                    </div>
                </div>
            </div>
            <div style={{padding: '0 20px 10px'}}>
                <div className={classes.FormRowWrapper}>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Postal Code</div>
                        <Input value={formData.postalCode} name="postalCode" changed={changed} styles={{borderColor: `${errors.postalCodeError ? red : 'inherit'}`}}/>
                        {errors.postalCodeError ? <RequiredError/> : null}
                    </div>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>City</div>
                        <Input value={formData.city} name="city" changed={changed} styles={{borderColor: `${errors.cityError ? red : 'inherit'}`}}/>
                        {errors.cityError ? <RequiredError/> : null}
                    </div>
                </div>
            </div>
            <div style={{padding: '0 20px 10px'}}>
                <div className={classes.FormRowWrapper}>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Date of Birth</div>
                        <Input placeholder="JJ/MM/AAAA" value={formData.dateOfBirth} name="dateOfBirth" changed={changed} styles={{borderColor: `${errors.dateOfBirthError ? red : 'inherit'}`}}/>
                        {errors.dateOfBirthError ? <RequiredError/> : null}
                    </div>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Gender</div>
                        <div style={{display: 'flex'}}>
                            <div style={{flexBasis: '50%'}}><input name="gender" type="radio" value="Female" checked={formData.gender === 'Female'} onChange={changed}/> Female</div>
                            <div style={{flexBasis: '50%'}}><input name="gender" type="radio" value="Male" checked={formData.gender === 'Male'} onChange={changed}/> Male</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const ReviewStep = (props) => {
    const { formData, changed, formDataErrors: { stepTwo: errors} } = props
    return (
        <div>
            <p style={{padding: '20px 20px 10px', fontSize: '0.9rem'}}>
                Kindly confirm your information and select your desired call time for the appointment and your ideal consultation date.
            </p>
            <div style={{padding: '0 20px 16px'}}>
                <h4>Votre contact</h4>
                <div className={classes.FormRowWrapper}>
                    <div className={classes.FormRow}>
                        <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #E8E8E8', padding: '10px 0 6px'}}><span className={classes.Label}>First Name</span><span>{formData.firstName}</span></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #E8E8E8', padding: '10px 0 6px'}}><span className={classes.Label}>Last Name</span><span>{formData.lastName}</span></div>
                    </div>
                    <div className={classes.FormRow}>
                        <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #E8E8E8', padding: '10px 0 6px'}}><span className={classes.Label}>Phone Number</span><span>{formData.phoneNumber}</span></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed #E8E8E8', padding: '10px 0 6px'}}><span className={classes.Label}>Email</span><span>{formData.email}</span></div>
                    </div>
                </div>
            </div>
            <div style={{padding: '0 20px 16px'}}>
                <div className={classes.FormRowWrapper}>
                    <div style={{width:'100%'}}>
                        <div className={classes.Label}>Domain</div>
                        <Select name="domaine" value={formData.domaine} changed={changed} styles={{width: '100%'}}>
                            <option value="Individual Therapy">Individual Therapy</option>
                            <option value="Couple Therapy">Couple Therapy</option>
                            <option value="Family Therapy">Family Therapy</option>
                            <option value="Teletherapy">Teletherapy</option>
                        </Select>
                    </div>
                </div>
            </div>

            <div style={{padding: '0 20px 16px'}}>
                <div className={classes.FormRowWrapper}>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Desired time to call</div>
                        <Select name="desiredCallTime" value={formData.desiredCallTime} changed={changed}>
                            <option value="9AM - 12:15PM">9AM - 12:15PM</option>
                            <option value="1:30PM - 6:30PM">1:30PM - 6:30PM</option>
                            <option value="Whenever">Whenever</option>
                        </Select>
                    </div>
                    <div className={classes.FormRow}>
                        <div className={classes.Label}>Appointment preference</div>
                        <Select name="desiredConsultationTime" value={formData.desiredConsultationTime} changed={changed}>
                            <option value="Earliest available">Earliest available</option>
                            <option value="Monday - morning">Monday - morning</option>
                            <option value="Monday - afternoon">Monday - afternoon</option>
                            <option value="Tuesday - morning">Tuesday - morning</option>
                            <option value="Tuesday - afternoon">Tuesday - afternoon</option>
                            <option value="Wednesday - morning">Wednesday - morning</option>
                            <option value="Wednesday - afternoon">Wednesday - afternoon</option>
                            <option value="Thursday - morning">Thursday - morning</option>
                            <option value="Thursday - afternoon">Thursday - afternoon</option>
                            <option value="Friday - morning">Friday - morning</option>
                            <option value="Friday - afternoon">Friday - afternoon</option>
                        </Select>
                    </div>
                </div>
            </div>

            <p style={{padding: '10px', margin: '10px 20px', fontSize: '0.8rem', borderRadius: 2, color:'#0288d1', backgroundColor: "#e1f5fe"}}>
                Applications are processed by CPM Admissions department Monday to Friday starting at 1:30PM.
                You will be contacted directly using the contact details you have given us within 1 working day to receive an appointment.
            </p>

            <div style={{padding: '10px 20px 16px'}}>
                <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <input type="checkbox" name="termsAccepted" onChange={changed}/>
                    <span style={{paddingLeft: 6}}>I accept the <a style={{textDecoration: 'underline'}} href="/en/privacy-policy" target="_blank">conditions relating to the transmission and confidentiality of data and the rules of use</a> related to the appointment request.</span>
                </div>
                <div style={{paddingLeft: 20, paddingBottom: 10}}>
                    {errors.termsAcceptedError ? <RequiredError/> : null}
                </div>

                <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <ToolTip fontSize="0.8rem"><input type="checkbox" name="cancellationPolicy" onChange={changed}/>
                    <span style={{paddingLeft: 6}}>I accept the 48 hours cancellation policy</span></ToolTip>
                </div>
                <div style={{paddingLeft: 20, paddingBottom: 10}}>
                    {errors.cancellationPolicyError ? <RequiredError/> : null}
                </div>
            </div>
        </div>
    )
}

const ThankYou = () => (
    <div style={{padding: 20}}>

        <div style={{padding: 20}}>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%'}}>
                <img src={CheckIcon} alt="Icon Success" style={{width: 40, height: 40}}/>
            </div>
        </div>
        <p>
            Your information has been submitted successfully. In a few moments you will receive our automatic confirmation email. Please, look in your junk mail folder in case it gets lost. (You can add admin [at] cpm-ca [dot] org to prevent antispam filtering.)
        </p>
        <p>
            The next step is to wait for our call. We will contact you as soon as possible to schedule an appointment.
        </p>
        <p>
            By setting an appointment with us, you are agreeing to <strong><ToolTip fontSize="0.8rem">our 48-hour cancellation policy</ToolTip></strong>, it is for the first appointment only, thereafter the conditions of the practitioner apply.
        </p>
        <p>
            If you have any questions do not hesitate to contact us at <a href="tel:+16132525227" style={{textDecoration: 'underline', fontWeight: 'bold'}} onClick={() => recordMobileCall()}>613-252-5227</a> from Monday to Friday from 9AM to 12PM and 1PM to 5PM.
        </p>
        <p>
            <strong>We are looking forward to helping you.</strong>
        </p>

    </div>
)

