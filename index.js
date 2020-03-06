const express = require('express');
const app = express();

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.get('Accept-Language'),
    software: req.get('User-Agent')
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});