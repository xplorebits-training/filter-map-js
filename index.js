//Importing fs-extra(a built-in module),getSource module.
const fse = require("fs-extra"); 
const genSource = require("./genSource");

//creating the array and storing it in json file.
fse.writeJSONSync("d-input.json",genSource(10,1,25));

//reaading the contents of json file.
const arr = fse.readJSONSync("d-input.json","utf8");

const isEven = number => number % 2;

//function to add the new property,value pairs.
function mapStatus(arr) {             
  return arr.map(x => (
    {
      number:x,
      result: isEven(x) === 0 ? "EVEN" : "ODD",
      mode: isEven(x)
    }
  ))
}

//calling the mapStatus function.
const result = mapStatus(arr);   
//displaying the result.
console.log(result);                   
