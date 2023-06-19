import React from 'react'
import classes from './Press.module.css'

import LeMonde from '../../../../psy-scan-bitbucket/src/images/press-le-monde.png'
import ArcInfo from '../../../../psy-scan-bitbucket/src/images/press-arc-info.png'
import CanalAlpha from '../../../../psy-scan-bitbucket/src/images/press-canal-alpha.png'

import AOne from '../../images/canada-counselling-and-psy.jpeg'
import ATwo from '../../images/canada-positiv-psy-association.jpg'
import AThree from '../../images/Canadian_Psychological_Association_Logo.jpg'
import AFour from '../../images/CPA-Bilingual.png'
import AFive from '../../images/world-psy-association.png'


export default ()=> (
    <div className={classes.Wrapper}>
        <div style={{maxWidth: 1170, padding: 15, margin: 'auto'}} >
            <div>PARU DANS</div>
            <div className={classes.Logos}>
                <img className={classes.Logo} src={LeMonde} alt="Forbes Logo"/>
                <img className={classes.Logo} src={ArcInfo} alt="Fiancial Times Log"/>
                <img className={classes.Logo} src={CanalAlpha} alt="BBC Logo"/>
            </div>

        </div>
    </div>

)

export const Associations = () => (
    <div>
        <div style={{maxWidth: 1170, padding: 15, margin: 'auto', textAlign: 'center'}} >
            <div style={{marginBottom: 20}}>RECONNU PAR</div>
            <div className={classes.Associations}>

                <div className={classes.Association}><img src={AOne} alt="Canada Counselling And Psy"/></div>
                <div className={classes.Association}><img src={ATwo} alt="Fiancial Times Log"/></div>
                <div className={classes.Association}><img src={AFour} alt="Channel 5 Logo"/></div>
                <div className={classes.Association}><img src={AThree} alt="BBC Logo"/></div>

                <div className={classes.Association}><img src={AFive} alt="Telegraph Logo"/></div>
            </div>
        </div>
    </div>
)