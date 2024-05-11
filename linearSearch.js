const arr=[1,5,7,9,6]
const targetElem = 10
console.log(linearSearch(arr,targetElem));

function linearSearch(arr, targetElem){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==targetElem){
            return i
        }
    }
    return -1
}


