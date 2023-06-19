import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
    <div>
        <Helmet>
            <title>404 Page non trouvée - Veuillez essayer les liens suivant</title>
            <meta name="description" content="Cette page apparait lorsque la page que vous recherchez est introuvable. Veuillez vérifier l'address URL ou assayer les liens suivant:"/>
        </Helmet>
        <div style={{maxWidth: 1170, padding: '20px', margin: 'auto'}}>
            <h1 style={{fontSize: '4rem'}}>Oops!</h1>
            <p>Nous n'arrivons pas à retrouver la page que vous cherchez.</p>
            <p>Code de l'erreur: 404</p>
            <p style={{marginBottom: 4}}>Essayer les liens ci-dessous à la place:</p>
            <ul>
                <li style={{margin: 0}}><Link to="/">Accueil</Link></li>
                <li style={{margin: 0}}><Link to="/reservation">Résever un consultation</Link></li>
                <li style={{margin: 0}}><Link to="/prestations">Nos prestations</Link></li>
                <li style={{margin: 0}}><Link to="/contact">Nous rejoindre</Link></li>
            </ul>
        </div>


    </div>
)

export default NotFoundPage
