import React from 'react'

import classes from '../Content.module.css'

import ArrowRight from '../../../images/arrow-right.svg'

export default () => (
    <div style={{backgroundColor: '#f6f6f6'}}>
        <div  style={{maxWidth: 1170, padding: '40px 20px', margin: 'auto', display: 'flex'}} className="">
            <div className={classes.ServiceWrapper}>
                <h1 style={{margin: '0 0 10px 0'}}>Services de Thérapie</h1>
                <h4>Découvrez le meilleur pour vous</h4>
                <div style={{width: 100, height: 2, backgroundColor: '#1689DF', marginBottom: 40}}></div>
                <p style={{textAlign: 'left'}}>
                    Notre équipe est fière de pouvoir vous venir en aide. Notre expertise couvre l’éventail des problèmes et des conditions psychologiques, du plus élémentaire au plus complexe. Cela inclut:
                </p>
                <div className={classes.ServiceList}>
                    <ul>
                        <li><img src={ArrowRight}/> Angoisses</li>
                        <li><img src={ArrowRight}/> Phobies et peurs </li>
                        <li><img src={ArrowRight}/> Difficultés relationnelles</li>
                        <li><img src={ArrowRight}/> Dépressions</li>

                    </ul>
                    <ul>
                        <li><img src={ArrowRight}/> Problèmes familiaux </li>
                        <li><img src={ArrowRight}/> Burnout</li>
                        <li><img src={ArrowRight}/> Difficultés professionnelles </li>
                        <li><img src={ArrowRight}/> Soucis d’identité </li>
                    </ul>
                    <ul>

                        <li><img src={ArrowRight}/> Traumatismes </li>
                        <li><img src={ArrowRight}/> Manque d’estime de soi</li>
                        <li><img src={ArrowRight}/> Dépendances</li>
                    </ul>
                </div>
                <p >
                    La liste susmentionnée n’est pas exhaustive, et avec plaisir nous ferons de notre mieux pour vous aider dans  vos difficultés.
                </p>
            </div>


        </div>

    </div>
)

