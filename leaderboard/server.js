const express = require ('express');

const app = express ();
const PORT = 5000;
const cors = require ('cors');

app.use (cors ());

app.use (express.json ());
app.use (express.urlencoded ({extended: false}));

const url = 'mongodb://mongo:27017/mongooseBlog';

const db = require ('./models');
const {SingleBlog} = db;

db.mongoose
  .connect (url, {useNewUrlParser: true})
  .then (() => {
    console.log (`Connected with mongodb ${url}`);
  })
  .catch (err => {
    console.log (err);
  });



app.get('/internal-test', (req, res) => {
  console.log("Success");
  res.send(true);
});

app.listen (PORT, () => {
  console.log (`Server is listening on ${PORT}`);
});
