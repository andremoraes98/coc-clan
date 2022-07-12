const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/clan', async (req, res) => {
  try {
    const { authorization } = req.headers;
    const url = 'https://api.clashofclans.com/v1/clans/%232POC9CQY8';
    const { data } = await axios.get(url, { headers: {Authorization: authorization} });
  
    return res.status(200).json(data);
  } catch(e) {
    console.log(e.message);
    res.status(500).json({ message: `Deu ruim por causa disso: ${e.message}`})
  }
});

app.listen(3001, () => {
  console.log('rodando na 3001!')
});