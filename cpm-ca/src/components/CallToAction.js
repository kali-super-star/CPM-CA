import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'
import { navigateTo } from 'gatsby-link'

const CallToAction = ({ type }) => {
    if(type === 'call') {
        return (
            <button>Appelez pour Réserver</button>
        )
    }
    return (
        <Button color="primary" text="Réserver en ligne" clicked={() => navigateTo({
            pathname: '/reservation',
            item: 'navigation'
        })}/>

    )
}

CallToAction.propTypes = {
    type: PropTypes.string
}

export default CallToAction