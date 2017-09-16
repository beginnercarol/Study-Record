
function steamroller(arr) {
  // I'm a steamroller, baby
  var temp=[];
  function  inverseArr(arr,temp){
    for(var i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        inverseArr(arr[i],temp);
      }
      else{
        temp.push(arr[i]);
      }
    }
    return temp;
  }
 return  inverseArr(arr,temp);
}

console.log(steamroller([1, [2], [3, [[4]]]]));





















