const express = require('express');
const app = express();
const db = require('./db_3.js');
const bodyparser = require('body-parser');
const detail = require('./data_2.js');
const menu_item = require('./menu.js');

const Person = require('./person.js');
app.use(bodyparser.json());




app.get('/menu_items/:menuType' ,  async (req, res)=>{
   try{
     const menuType = req.params.menuType;
     if(menuType == 'sweet' || menuType =='spicy'||  menuType =='sour' ){
      const response = await menu_item.find({taste:menuType});
      res.status(404).json(response);
     }
   }
   catch(error5){
      console.log("Error :" , error5);
      res.status(500).json({error:"Error occured"});
   }
   });
// app.get()

app.post('/details' , async (req , res)=>{
   try{
    
    const data = req.body;
    const newdata = detail(data);
    const  response = await newdata.save();
    console.log("DATA IS SAVED IN DATABASE");
    res.status(200).json(response);
   }
   catch(err){
    console.log("ERROR OCCURED", err);
    res.status(500).json({Error : "error occured"});
   }
});




app.post('/menu_items' ,  async (req , res)=>{
    try{
       const menudata = req.body;
       const newdata = menu_item(menudata);
       const response = await newdata.save();
       console.log("Data is submite on database");
       res.status(200).json(response);
       }
    catch(err){
     console.log("INTERNAL SERVER ERROR MENU NOT INSERTED" , err);
     res.status(200).json({err:"ERROR OCCURED"});
    }
});

app.get('/menu_items' , async(req , res)=>{
   try{
   const menudata = await menu_item.find();
   console.log("Data fatch successfully");
   res.status(200).json(menudata);
   }
   catch(err){
   console.log("ERROR :" , err);
   res.status(500).json({err : 'Error Ocured'})
   }
});

app.put('/menu_items/:id', async(req , res)=>{
   try{
     const menu_id = req.params.id;
     const updated_data = req.body;
     const response = await menu_item.findByIdAndUpdate(menu_id , updated_data , {
      new:true ,
      runValidators : true,
     });
     if(!response){
      return res.status(404).json({error : 'DATA NOT UPDATED'});
     }
     console.log("MENU ITEMS IS UPDATED");
     res.status(200).json(response);
     } 
   catch(error){
      console.log("INTERNAL SERVER ERROR FOUND" + error);
      res.status(500).json({error : "INTERNAL SREVER ERROR FOUND"});
   }
});

app.delete('/menu_items/:id' , async(req , res)=>{
   try{
      const menu_id = req.params.id;
      const response = await menu_item.findByIdAndDelete(menu_id);

      if(!response){
         res.status(404).json({ERROR : 'MENU ITEM IS NOT DELETED'});
      }
      console.log("MENU ITEM IS DELETED");
      res.status(200).json({message: 'MENU ITEM IS DELETED'});

   }
   catch(error){
      console.log("ERROR IS OCCURED :" , error);
      res.status(500).json({ERROR : "INTERNAL SERVER ERROR"});
   }
})

app.get('/details' , async(req , res)=>{
   try{
   const newdetail = await detail.find();
   console.log("Successfuly data fatch");
   res.status(200).json(newdetail);
   }
   catch(err){
   console.log("Error is occured" , err);
   res.status(500).json({err:'INTERNAL ERROR IN FETCHING THE DATA'});
   }

 
});
// app.post('/person' , async (req , res) =>{
//    try{
//     const data = req.body;
//     const newperson = new Person(data);
//      const response = await newperson.save();
//      console.log("Data saved");
//         res.status(500).json(response);
//    }
//    catch(error){
//      console.log("internal Server error" , error);
//      res.status(500).json({ERROR: "ERROR OCCURED"});
//    }
//   });

//   app.get('/person' , async(req , res)=>{
//    try{
//    const newdata = await Person.find();
//    res.status(500).json(newdata);
//    }
//    catch(error){
//       console.log("ERROR DATA NOT FETCH: " , error);
//       res.status(500).json({ERROR : 'DATA NOT FETCH'});
//    }
//   });

  

// app.get('/person/:workType' ,  async (req, res)=>{
//    try{
//      const workType = req.params.workType;
//      if(workType == 'manager' || workType =='waiter'|| workType =='chef' ){
//       const response = await Person.find({work:workType});
//       res.status(404).json(response);
//      }
//    }
//    catch(error){
//       console.log("Error :" , error);
//       res.status(500).json({error:"Error occured"});
//    }
//    });
   

//import roter folter separate person endpoints file
const personRoutes = require('./routes/personRoutes.js');
//use the routers in the server 
app.use('/person' , personRoutes);

app.listen(3000 , ()=>{
    console.log("Server is live");
});