
const express = require('express');
const server = express();
const morgan = require('morgan');
const PORT = 3001;
const router = require('./routes/index');
const cors = require('cors');


server.use(express.json());

server.use(cors());

server.use(morgan('dev'));

// server.use('')

server.use('/rickandmorty', router)

server.listen(PORT, ()=> {
    console.log('SERVER RAISED IN PORT ' + PORT)
})


// const http = require("http");
// const PORT = 3001;
// const characters = require('./utils/data')



// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     if(req.url.includes('/rickandmorty/character')   ){
//         const id = req.url.split('/').pop();
//         const character = characters.filter(c => c.id ===  Number(id));
        
//         res
//         .writeHead(200, {"content-type": "aplication-json"})
//         .end(JSON.stringify(character[0]));
//     }
// })
// .listen(PORT, 'localhost')