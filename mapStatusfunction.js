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
function mapStatus(arr){
for(let i=0;i<arr.length;i++){
if (arr[i].number % 2 === 0){
arr[i].result="EVEN";
arr[i].mode=0;
}else{
    arr[i].result="ODD";
arr[i].mode=1;
}
}
console.log(arr)
}
mapStatus(array)