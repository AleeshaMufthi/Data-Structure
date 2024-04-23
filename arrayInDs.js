// Q:1
// find two elements in the array that sum up to a given target sum

// METHOD 1
// const arr = [6,5,4,3,8,9,0]
// const targetSum = 10
// const result = findElements(arr, targetSum)
// console.log(`The two elements that sum upto ${targetSum} is ${result}`);

// function findElements(arr, targetSum){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]+arr[j]==targetSum){
//                 return [arr[i],arr[j]]
//             }
//         }
//     }
//     return []
// }

// METHOD 2
// function findElements(arr, targetSum){
//     const numHash = {}
//     for(let i=0; i<arr.length; i++){
//         const currentNum = arr[i]
//         const match = targetSum - currentNum
//         if(numHash[match]!==undefined){
//             return [match, currentNum]
//         }
//         numHash[match]=true
//     }
    
// }

//Q:2
// The selected number should move to the end of array

// const arr = [6,2,6,8,10,4,15,6,3,9,6]
// const selectedNum = 6
// const result = newArr(arr, selectedNum)
// console.log(result)

// function newArr(arr, selectedNum){
//     let i=0
//     let j=arr.length-1

//     while(i<j){
//         if(arr[j]==selectedNum){
//             j--
//         }else if(arr[i] == selectedNum){
//             let temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//             i++
//             j--
//         }else{
//             i++
//         }
//     }
//     return arr
// }

// ARRAY OPERATIONS

// 1.TRAVERSING
// const arr = [1,2,3,4,5]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// 2.INSERTION
// const arr = [1,2,3,4,5]
// const number = 7
// const position = 3
// for(let i=arr.length-1; i>=position-1; i--){
//     arr[i+1]=arr[i]
// }
// arr[position-1] = number
// console.log(arr);

// 2.a) inserting an element in the last position
// const arr = [1,2,3,4,5]
// const number = 19
// const position = arr.length
// arr[position]=number
// console.log(arr);

// 2.b) inserting an element at the first position
// const arr=[1,2,3,4,5]
// const number = 0
// const position = 0
// for(let i=arr.length-1; i>=position; i--){
//     arr[i+1]=arr[i]
// }
// arr[position]=number
// console.log(arr);

// 3. DELETION
// const arr = [2,3,4,5,6,7,8]
// const position = 5
// for(let i=position-1; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// }
// arr.length--

// console.log(arr);

// 3.a) Deleting an element from the begenning of array
// const arr = [2,3,4,5,6,7]
// const position = 1
// for(let i=position-1; i<arr.length-1; i++){
//     arr[i]=arr[i+1]
// }
// arr.length--
// console.log(arr);

// 3.b) Deleting an element from the end of array
// const arr = [2,3,4,5,6,7]
// arr.length--
// console.log(arr);

// 4. SEARCHING
// const arr = [2,3,4,5,6,7,8]
// const searchNo = 0
// let index = -1
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==searchNo){
//         index = i 
//     }
// }
// console.log(`value ${searchNo} is at the index ${index}`);

// 5.SORTING
const arr = [4,1,9,2,0,8,3,5,7,10]





// 2D Array
// const twoDarr = [
//     [2,3],
//     [4,5]
// ]
// for(let i=0; i<twoDarr.length; i++){
//     for(let j=0; j<twoDarr[i].length; j++){
//         console.log(twoDarr[i][j]);
//     }
// }

