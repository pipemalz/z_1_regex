function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while(arr.length > 0){
        newArr.push(arr.splice(0,size));
    }
    console.log(newArr)
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);