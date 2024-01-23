const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('trust proxy', true);


// Set up a route for the home page
app.get('/', (req, res) => {

    const clientIP = req.ip || req.connection.remoteAddress;
    console.log(clientIP);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post("/contact", (req, res)=>{
    let name = req.body.companyName;
    let mail = req.body.email;
    let message = req.body.Message;

    console.log(name);
    console.log(mail);
    console.log(message);

    res.send("Submitted");
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
