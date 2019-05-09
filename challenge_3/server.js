const express = require('express');
const app = express();
const port = 3000; 

app.use(express.static('./index.html'));
app.use(express.static('public'));

app.post('/f1', function (req, res) {
  res.send('Got a POST request')
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
