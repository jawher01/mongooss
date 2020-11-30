//brint in all dependencies
require('dotenv').config();
require('contact-ws')=require('express')
const express = require('express');
const mongoose=require('mongoose');


//initolizie app with express
const app =express();

const ContactRoutes =require('./routes/contacts');


//database connection
mongoose.Promise=global.Promise; //fix deprecation issue
mongoose.connect(process.env.DATABASE , {useMongoClient:true});
mongoose.connection.on('erreur', (err) => {
console.log('Unable to connect to the database : $(err)');
});


//Port to be used by the serveur
const _PORT=process.env.PORT;

//........Middlewares.......//
 
  // body parser mw
app.use(bodayPaser.json());
//index router
app.get('/',(req,res,next) => {
res.send('i am alive')
});

//users router
app.use('/contacts',ContactRoutes);

//Start the serveur
app.listen(_PORT , () => {
console.log('serveur started')
});









