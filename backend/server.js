const express = require ('express');

const app = express ();
const PORT = 5000;
const cors = require ('cors');
const axios = require('axios');

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

app.post ('/create-new-blog', async (req, res) => {
  let data = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  };

  try {
    const blog = new SingleBlog (data);
    const result = await blog.save ();
    console.log (result);
    res.send ({message: 'Successfully created Blog!'});
  } catch (err) {
    console.log (err);
    res.send (err);
  }
});

app.get ('/get-all-blogs', async (req, res) => {
  try {
    const result = await SingleBlog.find ({});

    console.log (result);
    res.send (result);
  } catch (err) {
    console.log (err);
    res.send (err);
  }
});

app.get ('/test', async (req, res) => {
  try {
    const response = await axios.get('http://internal:5000/internal-test');
    if (response && response.status === 200) {
      console.log(response.data);
      res.send("Internal call works");
    } else {
      res.status(500).send("Problem with internal test");
    }
  } catch (error) {
    console.error('Error during internal request:', error.message);
    res.status(500).send("Error with internal call");
  }
});

app.listen (PORT, () => {
  console.log (`Server is listening on ${PORT}`);
});
