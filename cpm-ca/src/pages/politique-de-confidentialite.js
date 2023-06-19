import React from 'react'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'

export default () => (
    <div>
        <Helmet>
            <html lang="fr"/>
            <title>Politique de Confidentialité du CPM-CA.org</title>
        </Helmet>
        <div style={{maxWidth: 1170, padding: '20px', margin: 'auto'}}>
            <h1>Conditions de confidentialité</h1>
            <h3>Règles d'utilisation et de confidentialité</h3>
            <h5>Ce formulaire est réservé aux personnes adultes
                domiciliées au Canada qui bénéficient ou non d’une assurance.
            </h5>
            <p>
                <strong>1. Urgence</strong><br />
                En cas d’urgence, nous vous recommandons d’appeler immédiatement votre médecin traitant ou le service d’urgence de votre région.
            </p>
            <p>
                <strong>2. Traitement des demandes</strong><br />
                La demande de rendez-vous est reçue par le Service des admissions du CPM (Centre de Psychotraumatologie et de Mediation). Celui-ci vous contactera pour vous proposer une date de consultation ou, au besoin, vous demander des informations complémentaires.
            </p>
            <p>
                <strong>3. Délais</strong><br />
                Vous serez contacté-e dans un délai de 1 jours ouvrables pour recevoir une proposition de
                rendez-vous ou, au besoin, fournir au service concerné des informations complémentaires.
                Si vous n’êtes pas joignable dans ce délai, nous essayerons de vous contacter encore pendant jusqu'à 5 jours ouvrables.
                Nous vous invitons à nous recontacter si on ne vous contacte pas dans ces délais.
            </p>
            <p>
                <strong>4. Demandes incomplètes</strong><br />
                Le CPM se réserve le droit de ne pas répondre à toute demande incomplète.
            </p>
            <p>
                <strong>5. Coordonnées personnelles de contact</strong><br />
                Vous serez directement contacté-e par téléphone durant les heures de bureau (9AM – 12PM & 1PM – 5PM)
                ou par e-mail au moyen des coordonnées que vous nous aurez fournies.
                Si vous annulez ou re-schedulez votre premier rendez-vous avec un préavis de moins de 48 heures, ou si vous ne vous présentez pas, vous serez facturé le montant total de la consultation.
            </p>
            <p>
                <strong>5. Confidentialité</strong><br />
                En transmettant vos coordonnées de contact (téléphone, e-mail, adresse postale), vous autorisez
                le CPM à vous transmettre, à ces coordonnées, les informations confidentielles
                concernant votre demande de rendez-vous. Nous vous rendons attentifs à vérifier que des
                personnes non autorisées, notamment de votre entourage,
                n’ont pas accès à ces coordonnées. Le CPM ne saurait être tenu pour responsable
                si des informations confidentielles communiquées au moyen de vos coordonnées personnelles de
                contact devaient être vues par des personnes non autorisées.
            </p>
            <p>
                <strong>6. Protection des données</strong><br />
                La protection de la sphère privée des patients dont les données personnelles sont traitées
                au sein de notre institution est une obligation légale. La législation fédérale et cantonale
                sur le secret médical et la protection des données nous oblige à protéger ces
                données personnelles contre tout emploi abusif. Le CPM prend toute mesure
                nécessaire afin d’éviter un traitement illicite des données des patients.
            </p>
            <p>
                <strong>Je confirme avoir lu et compris les règles d’utilisation précitées.</strong>
            </p>
            <p>
                <strong>
                    Je m’engage à prendre les mesures nécessaires pour que des personnes non autorisées ne puissent pas avoir accès aux informations que le Psy-Scan Institute me transmettra au moyen de mes coordonnées personnelles de contact.
                </strong>
            </p>
            <p>
                <strong>
                    La responsabilité du CPM ne peut être engagée en cas de non-respect par le demandeur des règles d’utilisation précitées.
                </strong>
            </p>
        </div>

        <Footer/>

    </div>
)


