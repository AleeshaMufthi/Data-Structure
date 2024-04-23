// 136 - Single number/unique number

// const arr = [5, 2, 1, 1, 10, 0, 5, 4, 2];

// let result = []
// for(let i=0; i<arr.length; i++){
//     let found = false
//     for(let j=0; j<arr.length;j++){
//         if(i!==j){
//             if(arr[i] == arr[j]){
//                 found = true
//                 break
//             }
//         }
//     }
//     if(!found){
//            result.push(arr[i])
//     }
// }
// console.log(result);


// 442 ------------------Find the duplicate numbers

// const arr = [5, 2, 1, 1, 10, 0, 5, 4, 2];

// let result = []
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i!==j && arr[i] == arr[j]){
//           if(!result.includes(arr[i])){
//             result.push(arr[i])
//           }
//         }
//     }
// }
// console.log(result);


// 2418 - Sort the people according to their heights

// const names = ["Shajitha", "Alansha","Salam","Aleesha"]

// const heights = [150, 170, 180, 160]

// console.log(sortPeople(names,heights));

// function  sortPeople(names, heights){
    
//     let result = []

//     let sortedHeights = [...heights].sort((a,b) => a-b)

//     for(let i=0; i<sortedHeights.length; i++){

//         let index = heights.indexOf(sortedHeights[i])

//         result.push(names[index])
//     }

//     return result 
// }

// 2114 - Maximum number of words found in sentence

// let sentences = ["alice and bob love leetcode","i think so too","this is great thanks very much"]

// let result = []

// let words = sentences.map(sentence=>sentence.split(" "))

// for(let i=0; i<sentences.length; i++){

//     let wordLength = words[i].length

//     result.push(wordLength)

// }

// let maxWord = Math.max(...result)

// console.log(maxWord);


// 66 - plus one to the last element

// let digits = [9];

// if(digits[digits.length-1] == 9){
//     digits[digits.length-1] = 0
// }else{
//     digits[digits.length-1] += 1

// } 

// if(digits[0] == 0){
//     digits.unshift(1)
// }
// console.log(digits)


// 2540 - find the common smallest element from 2 arrays

// const nums1 = [1,2,3,6]
// const nums2 = [2,3,4,5]

// let arr = [...nums1,...nums2]

// let result = []
// let smallest = []

// for(let i=0; i<arr.length; i++){
    
//     for(let j=0; j<arr.length; j++){
//         if(i!==j && arr[i] == arr[j]){
//            if(!result.includes(arr[i])){
//             result.push(arr[i])
//            }
           
//         }
//     }

//     if(result.length > 0){
//           smallest = Math.min(...result)
//     }

    
// }
// console.log(smallest);

// 414  - Third largest element

// var thirdMax = function(nums) {
    
//     nums = new Set(nums)
    
//     let arr = Array.from(nums)
    
//     arr.sort((a,b) =>b-a)
    
//     if(arr.length == 2){
//         thirdMax = arr[0]
//     }else if(arr.length >= 3){
//         thirdMax = arr[2]
//     }
    
    
//          return 
    
//     };


// 2413 - smallest even multiple

// var smallestEvenMultiple = function(n) {

//     if(n%2 == 0){
//         return n
//     }else{
//         return n*2
//     }
// };


// 2215 - diffrence of 2 arrays
// let nums1 = [1,2,3]
// let nums2 = [2,4,6]

// let set1 = new Set(nums1)
// let set2 = new Set(nums2)

// let diff1 = Array.from(set1).filter(x=>!set2.has(x))
// let diff2 = Array.from(set2).filter(x=>!set1.has(x))

// console.log(diff1,diff2)

// 1431 - 
// const candies = [2, 3, 5, 1, 3];
// const extraCandies = 3;

// const mostCandies = Math.max(...candies);
// const result = candies.map((item) => item + extraCandies >= mostCandies)

// console.log(result)

// 125
// let str = "race a car"

// let arr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

// let result = true

// for(let i=0; i<arr.length/2; i++){
//     if(arr[i] !== arr[arr.length-1-i]){
//         result = false
//     }
// }

// console.log(result)

// 1903 
// let num = "552";

// let result = ""

// if(num%2 !==0){
//     result += num
// }else{
//     for(let i=0; i<num.length; i++){
//         if(num[i]%2 !== 0){
//             result += num[i]
//         }
//     }
// }

// console.log(result)

// 1859
// let str = "is2 sentence4 This1 a3"

// let arr = str.split(" ")

// let result = arr.sort((a,b) => a[a.length-1] - b[b.length-1]).map((element) => element.slice(0,element.length-1)).join(" ")

// console.log(result)

// 905
// let nums = [3,1,2,4]

// let evenIndex = 0

// for(let i=0; i<nums.length; i++){
//     if(nums[i]%2 == 0){
//         let temp = nums[i]
//         nums[i] = nums[evenIndex]
//         nums[evenIndex] = temp
//         evenIndex ++
//     }
// }
// console.log(nums)

// 1816
// let str = "Hello how are you Contestant"
// let limit = 4

// let words = str.split(" ")

// let result = words.slice(0, limit).join(" ")
// console.log(result)

// 1662
// let sum1 = word1.join("")
// let sum2 = word2.join("")

// let result = true

// for(let i=0; i<sum1.length; i++){
//     if(sum1[i] !== sum2[i]){
//         result = false
//     }
// }
// return result


// 2138
// let str = "abcdefgh"
// let k = 3
// let fill = "x"

// let i = 0

// let group =[]

// while(i < str.length){
//     let groups = str.slice(i, i+k)
//     if(groups.length < k){
//         while(groups.length < k){
//             groups += fill
//         }
//     }
    
//     group.push(groups)
//     i += k
// }

// console.log(group)


// 1929
// let result = [...nums,...nums]

// return result

// 1920
// let ans = []

// for(let i=0; i<nums.length; i++){
//     ans.push(nums[nums[i]])
// }
// return ans

// 2011
// let sum = 0

// for(let i=0; i<operations.length; i++){
//     if(operations[i] == "X++" || operations[i] == "++X"){
//         sum++
//     }else{
//         sum--
//     }
// }
// return sum


// 2235
// let sum  = num1 + num2
// return sum

// 2942
// let result = []
// for(let i=0; i<words.length; i++){
//     if(words[i].includes(x)){
//         result.push(i)
//     }
// }


// 1672
// const accounts = [[1,5],[7,3],[3,5]]

// const sum = accounts.map((subarray) => subarray.reduce((accu,curr) => accu + curr, 0))

// let result = Math.max(...sum)

// console.log(result)

// 2798
// let hours = [0,1,2,3,4]
// let target = 2

// let result = []
// for(let i=0; i<hours.length; i++){
//     if(hours[i] >= target){
//         result.push(hours[i])
//     }
// }

// console.log(result.length)

// 1480
// let  nums = [1,2,3,4]
 
// let result = []
// let runningSum = 0

// for(let i=0; i<nums.length; i++){
//    runningSum += nums[i]
//    result.push(runningSum)
// }
// console.log(result)

// 1313
// let  nums = [1,2,3,4]
 
// let result = []
// for(let i=0; i<nums.length; i+=2){
//    let frequency = nums[i]
//    let value = nums[i+1]
//   for(let j=0; j<frequency; j++){
//       result.push(value)
//   }
// }
// console.log(result)

// 3065
// let nums = [2,11,10,1,3]
// let k = 10

// let result = []
// for(let i=0; i<nums.length; i++){
//     if(nums[i] < k){
//         result.push(nums[i])
//     }
// }
// console.log(result.length)

// 1528
// let s = "codeleet"
// let indices = [4,5,6,7,0,2,1,3]

// let sortedIndices = [...indices].sort((a,b) => a-b)

// let str = s.split("")

// let result = []

// for(let i=0; i<sortedIndices.length; i++){
    
//     let index = indices.indexOf(sortedIndices[i])
//     result.push(str[index])
    
// }

// console.log(result.join(''))


// 2469
// let Celsius = 36.50

// let Fahrenheit = Celsius * 1.80 + 32.00

// let Kelvin = Celsius + 273.15

// let result = [Kelvin,Fahrenheit]

// console.log(result)


// 1848
// let nums = [1,2,3,4,5]
// let target = 5
// let start = 3

// let result = []
// for(let i=0; i<nums.length; i++){
//     if(nums[i] !== target){
//     result.push(nums[i])
// }}

// let ans = result.length - start
// console.log(ans)



"C:\Users\hp\OneDrive\Documents\Data Structure"





