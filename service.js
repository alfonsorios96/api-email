const nodemailer = require('nodemailer');

const email = (request, response) => {
    const data = request.body;
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'caballeros.de.polymer@gmail.com',
            pass: 'Polython2017'
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
            res.status(200).json(info);
        }
    });
};

module.exports = email;
