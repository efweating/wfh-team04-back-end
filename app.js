const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({
  msg: 'You have reached the wfh-team04-project API',
}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/assigned', require('./routes/assigned'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
