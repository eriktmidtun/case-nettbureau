const express = require('express');
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const cors = require('cors')
const fetch = require('node-fetch')

const app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.json());
/* app.use(expressValidator()); */

app.post('/', [ // ferdiglagde valideringer fra express-validator
    check('name').isLength({min: 2}),
    check('email').isEmail(),
    check('phone').isLength({min:8, max:10}),
    check('areacode').isNumeric({no_symbols: true}).isLength({min:4,max:4})
    ], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    const data = req.body;

    //fikk ikke api til bring til å fungere i node, selv om det fungerte i postman
    async function checkPostalCode(){
        const postalCode = data.areacode;
        const url = 'https://api.bring.com/shippingguide/api/postalCode.json/?pnr=' + postalCode;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Bring-Client-URL': 'localhost',
                'Content-Type': 'application/json'
            }
          })
        const postalData = await response.body;
        console.log(postalData['valid']); // response har en key= valid med bool value som sier om postnummeret finnes
        
        if (postalData['valid']) {
            res.send({"success": "true"})
        }
        else {
            res.send({"errors": [
                {
                    "value": postalCode,
                    "msg": "Not a real norwegian postalCode",
                    "param": "areacode",
                    "location": "body"
                }
            ]})
        }
    }

    // hadde ikke tid til å sette opp api-keys for gmail
    const sendMail = () => {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'xxx@xx.com',
                pass: 'xxxx'
            }
        });
        let mailOptions = {
            from: '"test" <xx@gmail.com>', 
            to: req.body.to,
            subject: req.body.subject, 
            text: req.body, 
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
        });
    }
    
    /* checkPostalCode() */
    res.send({"success": "true"});
});

app.get('/', (req, res) => {
    res.send('testtest');
});

app.listen(port, () => {
    console.log("backend is running on port " + port);
});



