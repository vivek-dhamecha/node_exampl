const express = require('express');
const routes = express.Router();
const Person = require('../person');

//create the record (submit the record)
routes.post('/' , async (req , res) =>{
    try{
     const data = req.body;
     const newperson = new Person(data);
      const response = await newperson.save();
      console.log("Data saved");
         res.status(500).json(response);
    }
    catch(error){
      console.log("internal Server error" , error);
      res.status(500).json({ERROR: "ERROR OCCURED"});
    }
   });
 
   // read / view the reocrd
  routes.get('/' , async(req , res)=>{
    try{
    const newdata = await Person.find();
    res.status(500).json(newdata);
    }
    catch(error){
       console.log("ERROR DATA NOT FETCH: " , error);
       res.status(500).json({ERROR : 'DATA NOT FETCH'});
    }
   });
  //parameter defind
   routes.get('/:workType' ,  async (req, res)=>{
    try{
      const workType = req.params.workType;
      if(workType == 'manager' || workType =='waiter'|| workType =='chef' ){
       const response = await Person.find({work:workType});
       res.status(404).json(response);
      }
    }
    catch(error){
       console.log("Error :" , error);
       res.status(500).json({error:"Error occured"});
    }
    });

   //update the record
    routes.put('/:person_id' , async(req , res)=>{
     try{
      const person_id = req.params.person_id;
      const updated_person_data = req.body;
      const response = await Person.findByIdAndUpdate(person_id , updated_person_data , {
        new:true,
        runValidators:true,
      })
      if(!response)
      {
        return res.status(400).json({ERROR:'ERROR FOUNT NOT UPDATED'})
      }

      console.log('record is updated');
      res.status(200).json(response);


      }
     catch(error){
      console.log("ERROR :" , error );
      res.status(500).json({ERROR: ' INTERNAL SERVER ERROR '});
     }
    });

    routes.delete('/:id' , async(req , res)=>{
      try{
         const person_id = req.params.id;
         const response = await Person.findOneAndDelete(person_id);
         if(!response){
          return res.status(404).json({ERROR: 'ERROR record not deleted'});
         }
         console.log("RECORD DELETED SUCCESSFULLY");
         res.status(200).json({message:'PERSON DELETED SUCCESSFULLY'});
         }
      catch(error)
        {
        console.log("INTERNAL SERVER ERROR :" , error);
        res.status(500).json({ERROR:'INTERNAL SERVER ERROR'});
        }
    })

    
    module.exports = routes;