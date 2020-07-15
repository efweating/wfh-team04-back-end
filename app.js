const express = require('express');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({
    msg: 'You have reached the wfh-team04-project API',
  })
);

// Define Routes
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));
app.use('/events', require('./routes/events'));
app.use('/assigned', require('./routes/assigned'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
