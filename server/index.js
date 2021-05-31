const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/book/:bookId', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3.us-east-2.amazonaws.com/'});
  axios.get(`http://localhost:2002${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/price/:bookId', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3.us-east-2.amazonaws.com/'});
  axios.get(`http:// ec2-34-221-235-141.us-west-2.compute.amazonaws.com:3000${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/api/price/:bookTitle', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3.us-east-2.amazonaws.com/'});
  axios.get(`http:// ec2-34-221-235-141.us-west-2.compute.amazonaws.com:3000${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});


app.get('/api/summary/:bookId', async (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3.us-east-2.amazonaws.com/'});
  axios.get(`http://ec2-18-188-135-5.us-east-2.compute.amazonaws.com:1220${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});


app.get('/api/aggReview/:bookId', async (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3.us-east-2.amazonaws.com/'});
  axios.get(`http://ec2-18-220-21-137.us-east-2.compute.amazonaws.com:2880${req.url}`)
  // axios.get(`http://localhost:2880${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

app.get('/reviews/:bookId', (req, res) => {
  res.set({'Access-Control-Allow-Origin' : 'https://s3.us-east-2.amazonaws.com/'});
  axios.get(`http://ec2-54-67-73-166.us-west-1.compute.amazonaws.com:4001${req.url}`)
  .then((response) => {
    res.status(202).json(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
});

let port = process.env.port || 3300;

if(!module.parent){
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
}


