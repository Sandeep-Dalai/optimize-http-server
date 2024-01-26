const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/data', (req, res) => {
  const { n, m } = req.query;
  const filePath = `/tmp/data/${n}.txt`;

  if (!n) {
    return res.status(400).send('Please provide the "n" parameter.');
  }

  if (m) {
    const content = fs.readFileSync(filePath, 'utf-8').split('\n')[m - 1] || '';
    return res.send(content);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  res.send(content);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
