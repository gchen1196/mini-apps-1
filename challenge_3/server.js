const express = require('express');
const app = express();
const port = 3000; 
const bodyParser = require('body-parser');
const db = require('./db')


app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/user', function (req, res) {
  console.log('THIS IS BODYYY', req.body);

  var text = `INSERT INTO customer (name, email, password, line1, line2, city, state, zipcode, ccnumber, date, cvv, billingzip) VALUES ("${req.body.name}", "${req.body.email}", "${req.body.password}", "${req.body.line1}", "${req.body.line2}", "${req.body.city}", "${req.body.state}", "${req.body.zipcode}", "${req.body.ccnumber}", "${req.body.date}", "${req.body.cvv}", "${req.body.billingzip}")`;

  db.query(text, res, (err, results) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(results);
    }
  });

})

app.get('/user', (req, res) => {
  var text = `SELECT * FROM customer WHERE id=(SELECT max(id) FROM customer)`;
  db.query(text, res, (err, results) => {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      res.status(200);
      res.send(results);
    }
  })
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
