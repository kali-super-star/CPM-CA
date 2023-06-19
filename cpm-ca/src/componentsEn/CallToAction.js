import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'
import { navigateTo } from 'gatsby-link'

const CallToAction = ({ type }) => {
    if(type === 'call') {
        return (
            <button>Call to Book an Appointment</button>
        )
    }
    return (
        <Button color="primary" text="Book Online" clicked={() => navigateTo({
            pathname: '/en/booking',
            item: 'navigation'
        })}/>

    )
}

CallToAction.propTypes = {
    type: PropTypes.string
}

export default CallToAction