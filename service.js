const nodemailer = require('nodemailer');

/**
 * 
    URL: https://api-email-sellfone.herokuapp.com/
    URL: http://localhost:8080
 */

const email = (request, response) => {
    const data = request.body;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'caballeros.de.polymer@gmail.com',
            clientId: '300944596965-1comdl3i2ak1cj9smt2ralb5ua0kutt7.apps.googleusercontent.com',
            clientSecret: 'D8IZBwkEihNAamt7nhffk7Ir',
            refreshToken: '',
            accessToken: '',
            expires: 1484314697598
        }
    });
    const mailOptions = {
        from: 'Sellfone | Adquisiciones',
        to: 'ricardohlazo@gmail.com',
        subject: 'PRUEBAS',
        text: 'Contenido del email'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
            console.log(error);
            response.status(500).json(error.message);
        } else {
            console.log('Email sent');
            /*RESPONSE
            {"response":{"envelope":{"from":"hola@sellfonemx.com","to":["atorres@socializando.net, acquisitions@sellfonemx.com, adquisition@robot.zapier.com"]},"messageId":"01000170ac160f6a-43d399cd-3e1e-43ff-af06-0ad247be4a00-000000@email.amazonses.com"}}
            */
            res.status(200).json(info);
        }
    });
};

module.exports = email;
