const express    = require('express');
const app        = express();
const cors       = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/upload', function (req, res) {
    res.json({url: 'bla bla'});
});
app.listen(3000, function () {
    console.log('server port 3000');
});