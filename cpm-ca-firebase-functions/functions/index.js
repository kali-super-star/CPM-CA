const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const admin = require("firebase-admin");
admin.initializeApp();

const express = require('express');
const moment = require('moment-timezone');
const Hogan = require('hogan.js');
const sgMail = require('@sendgrid/mail');
const cors = require('cors')

const emailTempAdminFrench = require('./emailTempToAdmin').french
const emailTempAdminEnglish = require('./emailTempToAdmin').english

const app = express();

app.use(cors({ origin: 'https://cpm-ca.org' }));

const SENDGRID_API_KEY='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';
sgMail.setApiKey(SENDGRID_API_KEY);

const compiledAdminEmailTemplateFrench = Hogan.compile(emailTempAdminFrench)
const compiledAdminEmailTemplateEnglish = Hogan.compile(emailTempAdminEnglish)

const EMAIL = 'admin@cpm-ca.org';
// const EMAIL = 'miguel.kouam@gmail.com';

app.post('/new-lead', (req, res) => {

    const leadData = req.body;

    leadData['date'] = moment(new Date(Date.now())).tz("America/Toronto").format("MMMM Do YYYY, h:mm A")

    const leadEmailContentFrench = `
            <div>
                <p>${leadData.gender === 'Feminin' ? 'Chère Madame' : 'Cher Monsieur'} ${leadData.lastName},</p>
                <p>Nous avons bien reçu votre demande de rendez-vous et nous vous remercions pour votre confiance. Nous allons vous contacter par téléphone au plus tard dans les 24 heures (1 jour ouvrable) qui suivent.</p>
                <p>Si vous avez des questions n'hésitez pas à nous contacter au 613-252-5227 du Lundi au Vendredi de 9h à 12h et 13h à 17h.</p>
                <br />
                <p>Cordialement,</p> 
                <div>Julie Charbonneau</div>
                <div>Assistante Administrative</div> 
                <div>CPM: Centre de Psychotraumatologie et de Mediation</div> 
                <div>427 McArthur Ave, 2nd Étage, Suite #3</div> 
                <div>Ottawa, ON, Canada</div> 
                <div>Tél : +1(613)252-5227</div>
                <div></div> 
                <br/><br/>
                
            </div>
        `

    const leadEmailContentEnglish = `
            <div>
                <p>Dear ${leadData.gender === 'Female' ? 'Mme' : 'Mr.'} ${leadData.lastName},</p>
                <p>We have received your request for an appointment and we thank you for your trust.  One of our counselling administrators will contact you within opening hours.</p>
                <p>If you have any questions do not hesitate to contact us at 613-252-5227 from Monday to Friday from 9AM to 12PM and 1PM to 5PM.</p>
                <br />
                <p>Kind wishes,</p> 
                <div>Julie Charbonneau</div>
                <div>Administrative Assistant</div> 
                <div>CPM: Center for Psychotraumatology and Mediation</div> 
                <div>427 McArthur Ave, 2nd Floor, Office #3</div> 
                <div>Ottawa, ON, Canada</div> 
                <div>Phone: +1(613)252-5227</div>
                <div></div> 
                <br/><br/>
                
            </div>
        `

    const emailBody = req.body.language === "English"
        ? leadEmailContentEnglish
        : leadEmailContentFrench

    sgMail.send({
        to: leadData.email,
        from: { email: EMAIL, name: "CPM-CA.org"},
        subject: leadData.language === 'English' ? `Appointment request reception` : `Confirmation de demande d'un rendez-vous`,
        html: emailBody,
    })
        .then(function () {
            console.log(`New lead confirmation email successfully sent lead at ${leadData.email}`);
            console.log('now sending confirmation to admin')
            sgMail.send({
                to: EMAIL,
                from: { email: 'sendsync@gmail.com', name: "CPM-CA" },
                subject: leadData.language === "English" ? 'New Patient for CPM-CA.org' : "Nouveau Patient pour CPM-CA.org",
                html: leadData.language === "English"
                    ? compiledAdminEmailTemplateEnglish.render(leadData)
                    : compiledAdminEmailTemplateFrench.render(leadData),
            })
                .then(() => {
                    console.log('successfully sent confirmation to admin')
                    res.status(200).send({
                        error: false,
                        data: leadData
                    })
                })
                .catch((err) => {
                    console.log('error sending confirmation to admin')
                    console.log('error:', err)
                    res.status(500).send({
                        error: false,
                        message: 'Server Error'
                    })
                })

        })
        .catch(function (err) {
            console.log('error notification to lead at email: ', leadData.email)
            console.log('Error: ', err);
            res.status(500).send({
                error: false,
                message: 'Server Error'
            })
        })


});



exports.cpmca = functions.https.onRequest(app);