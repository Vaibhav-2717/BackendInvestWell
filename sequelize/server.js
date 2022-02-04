const express = require('express');
const cors = require('cors');

const app = express();

var corlink = {
    origin: 'https://localhost:8080'
}

const productRoute = require('./routes/customerRouter');

app.use(express.json())
app.use(cors(corlink));

app.use('/api/customer', productRoute)


app.get('/', (req, res) => { res.send('welcome to sequelize connection') })


const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Node JS Server Started'));