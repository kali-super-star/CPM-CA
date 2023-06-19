

const englishTemplate = `
<!DOCTYPE html>
<html>
<body>
<div  style="width: 100%; height: 100%; padding: 20px 0; background-color: #FCFCFC">
    <br>
    <div style="max-width: 600px; border-radius: 0 0 2px 2px; background-color: #fff; margin: auto; border: 1px solid rgb(221, 221, 221); border-top: 4px solid #008abc">

        <div style="border-bottom: 1px solid rgb(221, 221, 221);">

            <h2 style="text-align:center; color: #008abc">New Patient</h2>

        </div>
        <div style="padding: 20px">
            <table>
                <tr>
                    <td>Submission date:</td>
                    <td>{{date}}</td>
                </tr>
                <tr>
                    <td>First Name:</td>
                    <td>{{firstName}}</td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td>{{lastName}}</td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td>{{phoneNumber}}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{{email}}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{{address}}</td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td>{{city}}</td>
                </tr>
                <tr>
                    <td>Postal code</td>
                    <td>{{postalCode}}</td>
                </tr>
                <tr>
                    <td>Country:</td>
                    <td>{{country}}</td>
                </tr>
                <tr>
                    <td>Date of birth:</td>
                    <td>{{dateOfBirth}}</td>
                </tr>
                <tr>
                    <td>Gender:</td>
                    <td>{{gender}}</td>
                </tr>
                <tr>
                    <td>Service:</td>
                    <td>{{domaine}}</td>
                </tr>
                <tr>
                    <td>Desired call time:</td>
                    <td>{{desiredCallTime}}</td>
                </tr>
                <tr>
                    <td>Desired consultation time:</td>
                    <td>{{desiredConsultationTime}}</td>
                </tr>

            </table>
            <br>
        </div>
    </div>
    <br><br><br>
</div>
</body>

</html>
`

const frenchTemplate = `
<!DOCTYPE html>
<html>
<body>
<div  style="width: 100%; height: 100%; padding: 20px 0; background-color: #FCFCFC">
    <br>
    <div style="max-width: 600px; border-radius: 0 0 2px 2px; background-color: #fff; margin: auto; border: 1px solid rgb(221, 221, 221); border-top: 4px solid #008abc">
        <div style="border-bottom: 1px solid rgb(221, 221, 221);">
            <h2 style="text-align:center; color: #008abc">Nouveau Patient</h2>
        </div>
        <div style="padding: 20px">
            <table>
                <tr>
                    <td>Date de soumission:</td>
                    <td>{{date}}</td>
                </tr>
                <tr>
                    <td>Prénom:</td>
                    <td>{{firstName}}</td>
                </tr>
                <tr>
                    <td>Nom:</td>
                    <td>{{lastName}}</td>
                </tr>
                <tr>
                    <td>Numéro de téléphone:</td>
                    <td>{{phoneNumber}}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{{email}}</td>
                </tr>
                <tr>
                    <td>Addresse</td>
                    <td>{{address}}</td>
                </tr>
                <tr>
                    <td>Ville:</td>
                    <td>{{city}}</td>
                </tr>
                <tr>
                    <td>Code postal</td>
                    <td>{{postalCode}}</td>
                </tr>
                <tr>
                    <td>Pays:</td>
                    <td>{{country}}</td>
                </tr>
                <tr>
                    <td>Date de naissance:</td>
                    <td>{{dateOfBirth}}</td>
                </tr>
                <tr>
                    <td>Gendre:</td>
                    <td>{{gender}}</td>
                </tr>
                <tr>
                    <td>Domaine:</td>
                    <td>{{domaine}}</td>
                </tr>
                <tr>
                    <td>Temps d'appel désiré:</td>
                    <td>{{desiredCallTime}}</td>
                </tr>
                <tr>
                    <td>Temps de consultation désiré:</td>
                    <td>{{desiredConsultationTime}}</td>
                </tr>
            </table>
            <br>
        </div>
    </div>
    <br><br><br>
</div>
</body>

</html>
`

module.exports = {
    english: englishTemplate,
    french: frenchTemplate
}