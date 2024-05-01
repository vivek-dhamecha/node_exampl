const express = require('express');
const app = express();


const Detail = require('./my_new_schema.js');
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.post('/emp_detail' , async ( req , res)=>{
    try{
     const data = req.body;
     const newdetail = Detail(data);
     const response = await newdetail.save();
     console.log('DATA IS SAVED');
     res.status(200).json(response);
    }
    catch(err){
     console.log("ERROR OCCURED :" , err );
     res.status(500).json({err: 'INTERNAL SERVER OCCURED'});
    }

});


app.listen(3000 , ()=>{
   console.log("server is live");
});



// const express = require('express'); // Import express module
// const app = express(); // Create express app instance
// const db = require('./my_new_db.js');
// const Detail = require('./my_new_schema.js');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// // Define route for posting employee details
// app.post('/emp_detail', async (req, res) => {
//     try {
//         const data = req.body;
//         const newDetail = new Detail(data); // Create new instance of Detail model
//         const response = await newDetail.save(); // Save data to database
//         console.log('Data is saved');
//         res.status(200).json({ message: 'Successfully saved data in database', data: response });
//     } catch (err) {
//         console.log('Error occurred:', err);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Start server
// app.listen(3000, () => {
//     console.log('Server is live');
// });
