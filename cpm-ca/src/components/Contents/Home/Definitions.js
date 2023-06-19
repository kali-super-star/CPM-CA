import React, { Component } from 'react'

import classes from '../Content.module.css'

export default class extends Component {

    state = {
        activeTab: 'tab1'
    }

    render() {

        const { activeTab } = this.state
        const { isMobile } = this.props


        return (
            <div style={{}}>
                <div style={{maxWidth: 1170,padding: '40px 20px', margin: 'auto'}}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{margin: '0 0 10px 0', color: '#1689DF'}}>Définitions</h2>
                        <h4>Qu'est ce que la psychiatrie et la psychologie?</h4>
                        <p>
                            Les deux termes sont confus, mais ils refèrent tous au processus de rencontrer un professionel de la santé mentale pour vous aidez à vous sentir mieux. On vous dirigera vers l'expert approprié pour vos besoins.
                        </p>
                    </div>

                    { isMobile
                    ? <MobileTabs activeTab={activeTab} clicked={(event) => this.setState({ activeTab: event.target.getAttribute('data-tab')})}/>
                    : <DeskTopTab activeTab={activeTab} clicked={(event) => this.setState({ activeTab: event.target.getAttribute('data-tab')})}/>}
                </div>
            </div>
        )
    }
}

const MobileTabs = ({ activeTab, clicked }) => (
    <div>
        <ul style={{listStyleType: 'none', margin: 0, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <li className={classes.MobileTabWrapper}>
                <div className={classes.MobileTabTitle} data-tab="tab1" onClick={clicked}>Psychothérapeute</div>
                {activeTab === 'tab1'
                    ? <div className={classes.MobileTabContent}>Formé à une technique de thérapie particulière, le psychothérapeute a des aptitude de suivi psychologique et travaille plus en profondeur avec le patient. La psychothérapie est donc de moyen à long terme.</div>
                    : null
                }
            </li>
            <li className={classes.MobileTabWrapper}>
                <div className={classes.MobileTabTitle} data-tab="tab2" onClick={clicked}>Psychologue</div>
                {activeTab === 'tab2'
                    ? <div className={classes.MobileTabContent}>Un psychologue  a une formation similaire à un psychothérapeute, mais détient également un diplôme en psychologie.</div>
                    : null
                }
            </li>
            <li className={classes.MobileTabWrapper}>
                <div className={classes.MobileTabTitle}  data-tab="tab3" onClick={clicked}>Neuropsychologue</div>
                {activeTab === 'tab3'
                    ? <div className={classes.MobileTabContent}>Un neuropsychologue est un psychologue spécialisé dans la compréhension de la relation entre le cerveau physique et le comportement. Les troubles dans le cerveau et le système nerveux peuvent modifier le comportement et la fonction cognitive. Donc les prestations d'un neuropsychologue sont principalement axées dans les domaines de la neuropsychologie cognitive et de la neuro-réhabilitation."</div>
                    : null
                }
            </li>
            <li className={classes.MobileTabWrapper}>
                <div className={classes.MobileTabTitle} data-tab="tab4" onClick={clicked}>Médecine du sommeil</div>
                {activeTab === 'tab4'
                    ? <div className={classes.MobileTabContent}>La médecine du sommeil est un domaine médicale consacrée au troubles du sommeil. Les spécialistes proposent une approche diagnostique et thérapeutique adaptée aux pathologies (insomnies, ronflements, narcolepsie, apnées du sommeil, somnambulisme, décalages horaires, etc.)</div>
                    : null
                }
            </li>
            <li  className={classes.MobileTabWrapper}>
                <div className={classes.MobileTabTitle} data-tab="tab5" onClick={clicked}>Psychiatre et pédopsychiatre</div>
                {activeTab === 'tab5'
                    ? <div className={classes.MobileTabContent}>Le psychiatre assure le diagnostic, la prescription des médicaments en cas de besoin, ainsi que le suivi médical. Il est le responsable de toutes les prises en charge et encadre l’équipe thérapeutique avec des supervisions sur le plan clinique ou dans le cadre des expertises. Le pédopsychiatre est un psychiatre spécialisé pour les enfants.</div>
                    : null
                }
            </li>
        </ul>
    </div>
)

const DeskTopTab = ({ activeTab, clicked }) => (
    <div>
        <ul style={{listStyleType: 'none', margin: 0, display: 'flex', justifyContent: 'space-between'}}>
            <li data-tab="tab1"
                className={activeTab === 'tab1' ? [classes.TabItemList, classes.Active].join(' ') : classes.TabItemList}
                onClick={clicked}
            >
                Psychothérapeute
            </li>
            <li data-tab="tab2"
                className={activeTab === 'tab2' ? [classes.TabItemList, classes.Active].join(' ') : classes.TabItemList}
                onClick={clicked}
            >
                Psychologue
            </li>
            <li data-tab="tab3"
                className={activeTab === 'tab3' ? [classes.TabItemList, classes.Active].join(' ') : classes.TabItemList}
                onClick={clicked}
            >
                Neuropsychologue
            </li>
            <li data-tab="tab4"
                className={activeTab === 'tab4' ? [classes.TabItemList, classes.Active].join(' ') : classes.TabItemList}
                onClick={clicked}
            >
                Médecine du sommeil
            </li>
            <li data-tab="tab5"
                className={activeTab === 'tab5' ? [classes.TabItemList, classes.Active].join(' ') : classes.TabItemList}
                onClick={clicked}
            >
                Psychiatre et pédopsychiatre
            </li>
        </ul>
        <div>
            <TabContent activeTab={activeTab} />
        </div>
    </div>
)

const TabContent = ({ activeTab }) => {

    let content = null
    if(activeTab === "tab1") {
        content = "Formé à une technique de thérapie particulière, le psychothérapeute a des aptitude de suivi psychologique et travaille plus en profondeur avec le patient. La psychothérapie est donc de moyen à long terme."
    }
    if(activeTab === "tab2") {
        content = "Un psychologue  a une formation similaire à un psychothérapeute, mais détient également un diplôme en psychologie."
    }
    if(activeTab === "tab3") {
        content = "Un neuropsychologue est un psychologue spécialisé dans la compréhension de la relation entre le cerveau physique et le comportement. Les troubles dans le cerveau et le système nerveux peuvent modifier le comportement et la fonction cognitive. Donc les prestations d'un neuropsychologue sont principalement axées dans les domaines de la neuropsychologie cognitive et de la neuro-réhabilitation."
    }
    if(activeTab === "tab4") {
        content = "La médecine du sommeil est un domaine médicale consacrée au troubles du sommeil. Les spécialistes proposent une approche diagnostique et thérapeutique adaptée aux pathologies (insomnies, ronflements, narcolepsie, apnées du sommeil, somnambulisme, décalages horaires, etc.)"
    }
    if(activeTab === "tab5") {
        content = "Le psychiatre assure le diagnostic, la prescription des médicaments en cas de besoin, ainsi que le suivi médical. Il est le responsable de toutes les prises en charge et encadre l’équipe thérapeutique avec des supervisions sur le plan clinique ou dans le cadre des expertises. Le pédopsychiatre est un psychiatre spécialisé pour les enfants."
    }

    return (
        <div style={{padding: 20, backgroundColor: "#1689DF", color: '#fff'}}>
            {content}
        </div>
    )
}