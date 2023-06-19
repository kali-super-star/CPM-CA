import React from 'react'
import Helmet from 'react-helmet'

export default () => (
    <div>
        <Helmet>
            <html lang="fr"/>
            <title>Ligne de Crise - Urgences</title>
            <meta name="description" content="Si vous êtes en crise ou en danger, veuillez utiliser les ressources suivantes pour obtenir de l'aide immédiatement"/>
        </Helmet>
        <div>
            <div style={{maxWidth: 700, margin: 'auto', padding: '40px 15px'}}>
                <div style={{textAlign: 'center'}}>
                    <h1>Besoin d'aide?</h1>
                    <h3 style={{fontWeight: 300}}>Si vous êtes en crise ou en danger, veuillez utiliser les ressources suivantes pour obtenir de l'aide immédiatement.</h3>
                </div>
                <div style={{padding: 20, boxShadow: '0 1px 4px 0 rgba(205,205,205,0.8'}}>
                    <h3>Canada</h3>
                    <p style={{color: '#e8006b'}}>911  <span style={{paddingLeft: 20}}>Urgence</span></p>
                    <p>+1 (888) 353-2273  <span style={{paddingLeft: 20}}>Hotline</span></p>

                    <p><a target="_blank" href="http://www.yourlifecounts.org/need-help/crisis-lines">YourLifeCounts.org</a></p>
                </div>
            </div>
        </div>

    </div>
)