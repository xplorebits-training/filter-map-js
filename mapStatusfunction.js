const array = [
  {
    number: 12
  },
  {
    number: 3
  },
  {
    number: 8
  },
  {
    number: 14
  },
  {
    number: 1
  },
  {
    number: 7
  }
]

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

const result = mapStatus(array)
console.log(result)
