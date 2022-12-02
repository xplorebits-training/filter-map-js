const fse = require("fs-extra");                      //importing fs-extra module.
const arr = fse.readJsonSync("input.json","utf8");    //reading input.json file.

const isEven = number => number % 2;
function mapStatus(arr) {              //function to add the new property,value pairs.
  return arr.map(x => (
    {
      ...x,
      result: isEven(x.number) === 0 ? "EVEN" : "ODD",
      mode: isEven(x.number)
    }
  ))
}

const result = mapStatus(arr);          //calling the mapStatus function.
console.log(result);                    //displaying the result.
