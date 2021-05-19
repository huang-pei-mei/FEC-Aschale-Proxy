const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/book/:id', (req, res) => {
  axios.get(`http://localhost:2002/api/book/${id}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/price/:id', (req, res) => {
  axios.get(`http://localhost:3000/api/price/${id}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

// app.get('/api/price/:bookTitle', (req, res) => {
//   axios.get(`http://localhost:3000/api/price/${bookTitle}`)
//   .then((response) => {
//     res.status(202).json(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// });


app.get('/api/summary/:id', async (req, res) => {
  axios.get(`http://localhost:1220/api/summary/${id}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/reviews/:id', (req, res) => {
  axios.get(`http://localhost:4000/reviews/${id}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});