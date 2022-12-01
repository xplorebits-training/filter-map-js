const fse = require("fs-extra");
a=fse.readFileSync("input.json","utf8")
arr=JSON.parse(a);

const isEven = number => number % 2
function mapStatus(arr) {
  return arr.map(x => (
    {
      ...x,
      result: isEven(x.number) === 0 ? "EVEN" : "ODD",
      mode: isEven(x.number)
    }
  ))
}

const result = mapStatus(arr)
console.log(result)
