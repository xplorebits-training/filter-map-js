# filter-map-js
Create a javascript function called `mapStatus` that accept an array of objects as follows:
```
[
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
```

and return following output:

```
[
  {
    number: 12,
    result: 'EVEN',
    mode: 0
  },
  {
    number: 3,
    result: 'ODD',
    mode: 1
  },
  {
    number: 8,
    result: 'EVEN',
    mode: 0
  },
  {
    number: 14,
    result: 'EVEN',
    mode: 0
  },
  {
    number: 1,
    result: 'ODD',
    mode: 0
  },
  {
    number: 7,
    result: 'ODD',
    mode: 1
  }
]
```
