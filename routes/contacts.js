const express= require('express');
const router = express.Router();

const Contact = require('../models/Contact');



//add 
router.post('/add', (req, res, next) => {
   const Contact=new Contact({
   name: req.body.name,
   email: req.body.email,
   phone: req.body.phone
});

 Contact.save((err, Contact) =>{
   if(err){
   return res.send({
   success: false,
   message: 'error while saving, please try again'
});
  }
  if(Contact){
return res.send({
   success: false,
   message: 'failed to save contact'
});

}
return res.send({
   success: true,
   message: 'task saved'
  
});


});
});


//delete Contact with id
router.delete('/remove/:id', (req, res, next) => {
  const IdContact=req.params.id;
Contact.remove({_id: IdContact}, (err) =>{

     if(err){
   return res.send({
   success: false,
   message: 'failed to delete Contact'
});
}

     
   return res.send({
   success: true,
   message: 'contact deleted'
});
});
}); 


//list 
router.post('/list', (req, res, next) => {
   
Contact.find((err, Contact) =>{
     if(err){
   return res.send({
   success: false,
   message: 'error while retreving a contact'
});
}
if (!Contact){
return res.send({
   success: false,
   message: 'you have no Contact'
});
}
return res.send({
   success: true,
   Contact

});
});
});


module.exports=router;

