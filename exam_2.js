
function tryRemoveFromArray(arr,index){
    let newArr = [];
    if (index > arr.length){
        alert("khong hop le")
    }
    for (let i =0;i<arr.length;i++){
      if (index !== i){
          newArr.push(arr[i]);
      }
    }
    console.log(newArr);
    document.getElementById("result").innerHTML = `${newArr}`;
}
