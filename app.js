const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Set up static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('trust proxy', true);



//DATABASE
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'P@rth123',
    database: 'myPersonalPortfolio'
  });


// Set up a route for the home page
app.get('/', (req, res) => {

    const clientIP = req.ip || req.connection.remoteAddress;
    console.log(clientIP);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.post("/contact", (req, res)=>{
    const name = req.body.companyName;
    const mail = req.body.email;
    const message = req.body.Message;


    const sql = `insert into contact (Organisation_Name, Email, Message, Send_Date) value ("${name}", "${mail}", "${message}", current_date());`;

    pool.query(sql, (error, results, fields) => {
        if (error) {
          console.error(error);
          res.send(error);
        } else {
            res.send("Submitted");
        }
        pool.end();
      });

    
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
