const express = require('express');
const { join } = require('path');

const app = express();

app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jsx');


app.use(require('./routes'));

app.get('/burgers', (req, res) => {
  res.render('home');
});


app.listen(process.env.PORT || 3000);