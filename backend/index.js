const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/clan', async (req, res) => {
  try {
    const { authorization } = req.headers;
    const url = 'https://api.clashofclans.com/v1/clans/%232POC9CQY8';
    const { data } = await axios.get(url, { headers: { Authorization: authorization } });
  
    return res.status(200).json(data);
  } catch(e) {
    console.log(e);
    res.status(500).json({ message: `Deu ruim por causa disso: ${e.message}`})
  }
});

app.get('/player/:tag', async (req, res) => {
  try {
    const { authorization } = req.headers;
    const { tag } = req.params;
    const playerTag = `%23${tag}`
    const url = `https://api.clashofclans.com/v1/players/${playerTag}`;
    const { data } = await axios.get(url, { headers: { Authorization: authorization } });
  
    return res.status(200).json(data);
  } catch(e) {
    console.log(e);
    res.status(500).json({ message: `Deu ruim por causa disso: ${e.message}`})
  }
});

app.listen(3001, () => {
  console.log('rodando na 3001!')
});