const detail = require('./data_2.js');
//require passport
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;








passport.use(new LocalStrategy(async(USERNAME , password , done)=>{
    try{
   console.log("Received creadentials" , USERNAME, password);
   const user = await detail.findOne({username:USERNAME});
 
 
   if(!user)
   {
   return done(null , false , { message: 'incorrect username'});
   }
 
//    const passwordMatch = user.password === password ? true : false;  // simple format
      const passwordMatch =  await user.comparepassword(password);
   if(passwordMatch){
    return done(null , user);
   }
   else{
    return done(null , false , {message:'incorrect password'})
   }
 
 
    }
    catch(error){
    return done(error)
    }
 }));

 module.exports = passport;
 