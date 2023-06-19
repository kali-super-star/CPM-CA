import React from 'react'
import classes from '../Content.module.css'
import DoneIcon from '../../../images/icon-done.svg'

import TherapieIndividuelleImage from '../../../images/therapie-individuelle-image.jpg'
import TherapieDeCoupleImage from '../../../images/therapie-de-couple.jpg'
import TherapieFamilialeImage from '../../../images/therapie-familiale.jpg'
import PsychoEducationImage from '../../../images/psychoeducation.jpg'
import PourquoiImage from '../../../images/pourquoi-le-cpm.jpg'

export default () => (
    <div className={classes.SideImageWrapper}>
        <div
            className={classes.SideImageWhyUs}
            style={{backgroundImage: `url(${PourquoiImage})`}}
        />
        <div className={classes.SideContentWrapper}>
            <div className="">
                <h1 style={{margin: '0 0 40px 0'}}>Why choose the CPM?</h1>
            </div>

            <div>
                <h4 className={classes.WhyItemTitle}><img src={DoneIcon} className={classes.CheckIcon}/>We are professionals</h4>
                <p>
                    All our therapists are accredited and experienced professionals. Our therapists have met rigorous selection criteria and are carefully hand-picked to ensure the best support.
                </p>
            </div>
            <div>
                <h4 className={classes.WhyItemTitle}><img src={DoneIcon} className={classes.CheckIcon}/>We are fast</h4>
                <p>
                    Having to wait days or weeks until your first appointment can be frustrating, especially during times of vulnerability. With CPM you will get an appointment as soon as possible.
                </p>
            </div>
            <div>
                <h4 className={classes.WhyItemTitle}><img src={DoneIcon} className={classes.CheckIcon}/>Affordable service</h4>
                <p>
                    Our rates are affordable and we can also be covered by insurance.
                </p>
            </div>
        </div>

    </div>
)

export const TherapieIndividuelle = () => (
    <div className={classes.SideImageWrapper}>
        <div className={[classes.SideContentWrapper, classes.TherapieIndividuelle].join(' ')}>
            <h2>Individual Therapy</h2>
            <p>
                Individual therapy aims at treating the individual's emotional, relational and psychological disorders. This treatment is for both teens and adults.
            </p>
        </div>
        <div
            className={classes.SideImageTherapies}
            style={{backgroundImage: `url(${TherapieIndividuelleImage})`}}
        />

    </div>
)

export const TherapieCouple = () => (
    <div className={[classes.SideImageWrapper, classes.TherapieCoupleWrapper].join(' ')}>
        <div
            className={[classes.SideImageTherapies, classes.TherapieCouple].join(" ")}
            style={{backgroundImage: `url(${TherapieDeCoupleImage})`}}
        />
        <div className={classes.SideContentWrapper}>
            <h2>Couple Therapy</h2>
            <p>
                Couple therapy is intended for couples, whether married or not, and for people facing difficulties living together. It aims to help couples overcome relationship problems and strengthen emotional closeness and restore their relationship to a healthier and more balanced level of functioning.
            </p>
        </div>

    </div>
)

export const TherapieFamille = () => (
    <div className={classes.SideImageWrapper}>
        <div className={classes.SideContentWrapper}>
            <h2>Family Therapy</h2>
            <p>
                Family therapy targets the family as a social system. It is aimed at all families having relationship difficulties in improving mutual understanding and increasing the emotional support of family members, especially during the transition phases (children's adolescence, separation of parents, unemployment, retirement, etc...) and difficult events, such as death or serious illness in the family.
            </p>
        </div>
        <div
            className={classes.SideImageTherapies}
            style={{backgroundImage: `url(${TherapieFamilialeImage})`}}
        />
    </div>
)


export const PsychoEducation = () => (
    <div className={[classes.SideImageWrapper, classes.PsychoeducationWrapper].join(' ')}>
        <div
            className={classes.SideImageTherapies}
            style={{backgroundImage: `url(${PsychoEducationImage})`}}
        />
        <div className={classes.SideContentWrapper}>
            <h2>Psychoeducation</h2>
            <p>
                We provide psychoeducation on a variety of issues related to the education of children and teenagers. The goal is to help parents effectively manage the behavioural and emotional difficulties of their child or teen.
            </p>
        </div>

    </div>
)

