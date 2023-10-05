require('dotenv').config();
PORT = process.env.PORT || 5005

const app = require('./app');

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}.`);
})