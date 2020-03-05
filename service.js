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
            user: 'hola@sellfonemx.com',
            clientId: '713912452017-he1942hdot2l9ld3be7fe71dknrquubm.apps.googleusercontent.com',
            clientSecret: 'GXd36Z1RiwPVpijRsNil6sLh',
            refreshToken: '1//04JxcdtRUMgHtCgYIARAAGAQSNwF-L9Ir6VC2eVBseBkgXUTrir6Ka_RTrtjvSXoPFHFE8AFWWFZDNjTpYSeLMmtCndiuo_MOTis',
            accessToken: 'ya29.Il_BB4t92tyX6bvWJrOBkSD-wNIm1y8Q3ps4NQa6UJUG8qUJiFM3wq4QF_pP6-UOSrrJk6XG0qBMFBgAThPCLwgMTNrgVXEF3a8ziHrqumKy0A9WEfWh2YaU2qi081J-5Q',
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
            response.status(200).json({
                info, data
            });

        }
    });
};

module.exports = email;
