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
            refreshToken: '1//04doomBx2uv7QCgYIARAAGAQSNwF-L9IrjaEI9kCsvOqrucrMcVWnkO0P51uFYNtW6gzMcjpbNPxyhBBBKatO9HwN-Faz1jitnpk',
            accessToken: 'ya29.a0Adw1xeXzsMTOTZwvYA5MmX-VqaIKsZhXA7g2wnEVYTr9xhHG-4epJG2Ng2TPXw6HQTXYs-a1yPEmsfADkp4HuQ84KNhuFMyKtWFDVaChNEa4l02RIZEd8c2WiUOSSpGHEVT7A8EFUzZW5XvE9MNlQ_681LctkIJCfRk',
            expires: 1484314697598
        }
    });
    const mailOptions = {
        from: 'Sellfone | Adquisiciones',
        to: 'ricardohlazo@gmail.com',
        subject: 'PRUEBAS con HTML',
        html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Sellfone | Adquisiciones</title>
                <style>
                    body {
                        color: white;
                        background-color: #07234b;
                    }
                </style>
            </head>
            <body>
                <p>
                    Hemos recibido la cotización de tu equipo celular,
                    enseguida te enviaremos una guia para que puedas enviarnos
                    tu equipo y procedamos a realizar la compra o consigna del equipo.
                </p>
                <ul>
                    <li>Cliente: Manuel A. Rios Medellin</li>
                    <li>Marca: ${data.brand}</li>
                    <li>Modelo: ${data.model}</li>
                    <li>Tipo de Venta: Consigna</li>
                    <li>Estética: Clase A</li>
                    <li>Precio: $9,972</li>
                </ul>
                <p>Saludos, Equipo Sellfone</p>
                <p>hola@sellfonemx.com</p>
                
                <div style="border-radius: 4px;box-sizing: border-box;padding: 0 4em;margin: 40px auto;overflow: hidden;border: 1px solid #b0afb5;color: #4f5365;">
    <div>
        <div style="position: relative;top: -1px;padding: 9px 0 10px;font-size: 11px;text-transform: uppercase;text-align: center;color: #ffffff;background: #000000;">
            Ficha digital. No es necesario imprimir.
        </div>
        <div style="margin-top: 26px;position: relative;display: flex;flex-wrap: wrap;">
            <div style="text-align:center;width: 50%;"><img
                    src="https://vertiche.mx/wp-content/uploads/2018/11/oxxopay_brand.png" alt="OXXOPay"></div>
            <div style="text-align:center;width: 50%;">
                <h3></h3>
                <p style="font-size: 10px;line-height: 14px;"></p>
            </div>
        </div>
        <div style="margin-top: 14px;text-align:center">
        </div>
    </div>
    <div style="padding: 32px 0px 45px;border-top: 1px solid #b0afb5;background: #f8f9fa;">
        <h3>:</h3>
        <ol style="margin: 17px 0 0 16px;">
            <li><a href="https://www.google.com.mx/maps/search/oxxo/" target="_blank"></a></li>
            <li><strong></strong></li>
            <li><strong></strong></li>
            <li><strong></strong></li>
            <li><br> <strong></strong></li>
        </ol>
    </div>
    <div style="width:60%;margin: 22px auto;padding: 22px 20px;color: #108f30;text-align: center;border: 1px solid #108f30;border-radius: 4px;background: #ffffff;">
        <p style="margin:0"><br>
        </p></div>
</div>
            </body>
            </html>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
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
