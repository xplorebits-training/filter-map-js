 //importing fs-extra module.
const fse = require("fs-extra");  
//reading input.json file.
const arr = fse.readJsonSync("input.json","utf8");    

const isEven = number => number % 2;
 //function to add the new property,value pairs.
function mapStatus(arr) {             
  return arr.map(x => (
    {
      ...x,
      result: isEven(x.number) === 0 ? "EVEN" : "ODD",
      mode: isEven(x.number)
    }
  ))
}

//calling the mapStatus function.
const result = mapStatus(arr);   
//displaying the result.
console.log(result);                   
