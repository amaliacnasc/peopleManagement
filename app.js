const http = require ("http"); 
const express = require ("express"); 
const mongoose = require("mongoose"); 
const cors = require('cors'); 
const connectDB = require('./database/connectDB'); 
const helmet = require('helmet');
const morgan = require('morgan');

require('dotenv').config(); 

const app = express(); 

// middleware
app.use(cors()); 

// conectando mongo 
connectDB(); 

// Middleware para parsing de dados de formulários
app.use(express.urlencoded({ extended: true })); 

// Middleware de segurança
app.use(helmet());

// Middleware para habilitar CORS
app.use(cors());

// Middleware para log de requisições
app.use(morgan('dev'));


app.use(express.json());


const user = require("./routes/userRoutes"); 
app.use('/api/usuarios', user); 



app.use(express.urlencoded())
// PORTA
const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 

console.log('app js deu certo'); 