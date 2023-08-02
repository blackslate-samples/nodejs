const express = require('express');
const app = express();

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

module.exports = app;