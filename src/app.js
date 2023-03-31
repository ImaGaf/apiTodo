const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const db = require ('./utils/dataBase');
const initModels = require('./models/initModels');
const userRoute = require('./routes/users.route')
const taskRoute = require('./routes/task.route');
const statusRoute = require('./routes/status.route');


initModels();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

 

db.authenticate()
    .then(()=>{
        console.log('Base de datos conectada')
    })
    .catch((error) => console.log(error))


db.sync({alter: false})
    .then(()=>{
        console.log('Base de datos sincronizada')
    })
    .catch((error)=> console.log(error))


app.use(userRoute);
app.use(taskRoute);
app.use(statusRoute);

app.get('/', (req,res)=>{
    res.send('Welcome to my API')
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})