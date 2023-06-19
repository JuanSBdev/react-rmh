
const express = require('express');
const server = express();
const morgan = require('morgan');
const PORT = 3001;
const router = require('./routes/index');
const cors = require('cors');
const { conn } = require('./DB_connection');

server.use(express.json());

server.use(cors());

server.use(morgan('dev'));

// server.use('')

server.use('/rickandmorty', router)

conn.sync({force: true})
.then(()=>{
    console.log('ddbb conectada');

    server.listen(PORT, ()=> {
        console.log('SERVER RAISED IN PORT ' + PORT)
    })

})
.catch(err => console.log(err.message))

