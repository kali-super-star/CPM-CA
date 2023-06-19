import React from 'react'
import Button from '../../Button/Button'
import { navigateTo } from 'gatsby-link'


export default () => (
    <div style={{backgroundColor: '#1689DF', color:'#fff'}}>
        <div style={{
            maxWidth: 800,
            margin: 'auto',
            padding: '40px 20px',
            minHeight: 320,
            display: 'flex',
            alignItems:'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <h1 style={{textAlign: 'center'}}>On est à votre écoute</h1>
            <p style={{textAlign: 'center'}}>
                Nos conseillères et conseillers travaillent de manière confidentielle et adaptent leur approche à vos besoins individuels.  Votre thérapie commence par votre prise de rendez-vous qui est le premier pas vers le changement progressif.

            </p>
            <Button color="transparent" text="PRENDRE RENDEZ-VOUS" clicked={() => navigateTo('/reservation')}/>
        </div>
    </div>
)