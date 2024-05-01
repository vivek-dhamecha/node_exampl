const express = require('express')
const app = express();

const database = require('./db.js');



const Person = require('./person.js');

const bodyparser = require('body-parser');
app.use(bodyparser.json());


app.get('/' , function(req , res){
  res.send("Welcome to node js program");
})

app.get('/js' , (req , res)=>{
  res.send("i love javascript");
})


app.get('/misha' , (req  , res)=>{
let employee_detail = {
  name : "misha", 
  age : 25,
  mono : "7698903016" ,
  village : "Bhesan" , 
  Dis : "Junagadh" , 
  state : "Gujarat" , 

}

  res.send(employee_detail);
});

app.get('/mit' , (req , res)=>{
  res.send("HI MIT DHAMECHA")
});


app.post('/person' , async (req , res) =>{
 try{
  const data = req.body;
  const newperson = new Person(data);
  // newperson.name= data.name;
  // newperson.age = data.age;
 
   const response = await newperson.save();
   console.log("Data saved");
      res.status(500).json(response);
 }
 catch(error){
   console.log("internal Server error" , error);
   res.status(500).json({ERROR: "ERROR OCCURED"});
 }

});

app.post('/details',(req  , res)=>{
  res.send("data is saved");
  console.log("data is saved");
})

app.listen(3000 ,  ()=>{
  console.log("SERVER IS LIVE ON PORT NO 3000");
});





// {


// "name":"vivek",
// "surname":"dhamecha",
// "age": 20,
// "address":"Jin plot , near school",
// "mo_no": "9106232457",
// "city": "bhesan"
// }





