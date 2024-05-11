// ==============Selection sort - find the smallest and put it into front

// const arr = [9, 5, 2, 7, 1, 8, 4, 6, 3]
// for(let i=0; i<arr.length; i++){
//     let smallest = i
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j] < arr[smallest]){
//             smallest=j
//         }
//     }
//     if(smallest!==i){
//         temp=arr[i]
//         arr[i]=arr[smallest]
//         arr[smallest]=temp
//     }
// }
// console.log(arr);



// ======================  Quick sort

// const arr=[10, 2, 4, 1, 1, 5, 7, 6]
// console.log(quickSort(arr));

// function quickSort(arr){
    
//     if(arr.length <=1 ){
//         return arr
//     }

//     const pivot = arr[Math.floor(arr.length/2)]
//     const left = []
//     const right = []

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else if(arr[i] > pivot){
//             right.push(arr[i])
//         }
//     }

//     return quickSort(left).concat(pivot, quickSort(right))
// }


// =========================== Merge sort

// const arr = [9, 5, 2, 7, 1, 8, 4, 6, 3];
// console.log(mergeSort(arr));

// function mergeSort(arr){
//     if(arr.length <= 1){
//         return arr
//     }

//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0, mid) //slice method creates a new array containing elements from the original array. left array contains elements from index 0 to mid - 1
//     const right = arr.slice(mid) //The right array contains elements from index mid to the end of the array.

//     return merge(mergeSort(left), mergeSort(right))
// }

// function merge(left, right){
//     let result = []
//     let leftIndex = 0
//     let rightIndex = 0

//     while(leftIndex < left.length && rightIndex < right.length){
//         if(left[leftIndex] < right[rightIndex]){
//             result.push(left[leftIndex])
//             leftIndex++
//         }else{
//             result.push(right[rightIndex])
//             rightIndex++
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
// }




//---------------------------------- Bubble sort using array
// const arr = [3,9,5,8,6,1,7,2,0]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);

// -------------------------------Insertion sort using array
// const arr = [3,9,5,8,6,1,7,2,0]

// for(let i=0; i<arr.length; i++){
//     let current = arr[i]
//     let j = i-1
//     while(j >= 0 && arr[j] > current){
//         arr[j+1] = arr[j]
//         j--
//     }
//     arr[j+1] = current
// }
// console.log(arr);



















































































































