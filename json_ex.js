//convert a object to json

const objectConvert =  {
    name:"vivek ",
    age: "19" , 
    mono : "9106232457",
    village : "Bhesan"
}
const json = JSON.stringify(objectConvert);
console.log(json);
console.log(typeof json);
console.log(typeof objectConvert);

console.log("--------------------------------------------------------------------");


// Covert A JSON TO OBJECT

const Str = '{"name": "vicky"  , "age":"22" ,  "vill" : "Bhesan" , "District":"Junagadh"}';
const jsononbject =  JSON.parse(Str);
console.log(jsononbject);
