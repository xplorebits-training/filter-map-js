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
const newArray=array.map(mapStatus)
function mapStatus(arr){
     if(arr.number % 2 ===0){
         arr.result="EVEN";
         arr.mode=0;
      }else{
         arr.result="ODD";
         arr.mode=1;
      }
}
console.log(array)
