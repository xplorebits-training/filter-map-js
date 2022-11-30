array=[
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
array.map(fun = (x) => x.number%2===0 ? (x.result="EVEN",x.mode=0) : (x.result="ODD",x.mode=1) )
console.log(array)
