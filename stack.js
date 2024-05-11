
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.top = null
//         this.length = 0
//     }

//     push(data){
//         let newNode = new Node(data)
//         if(this.top == null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//         this.length++; 
//     }

//     display(){
//         let temp = this.top
//         while(temp !== null){
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }

//     pop(){
//         if(this.top == null){
//             return null
//         }
//         let poppedData = this.top.data
//         this.top = this.top.next
//         return poppedData
//     }

//     reverse(str){
//         for(let i=0; i<str.length; i++){
//             this.push(str[i])
//         }
//         let reversedString = ''
//         while(this.top !== null){
//             reversedString += this.pop()
//         }
//         return reversedString
//     }

//     sum(){
//         let sum = 0
//         let current = this.top
//         while(current!==null){
//             sum = sum + current.data
//             current = current.next
//         }
//        return sum
//     }

//     delete(deleteData){
//         let current = this.top
//         let prev = null
//         while(current !== null && current.data == deleteData){
//               this.top = current.next
//               return
//         }
//         while(current !== null && current.data !== deleteData){
//             prev = current 
//             current = current.next
//         }
//          prev.next =  current.next
//     }

//     // midElement(){
//     //     let current = this.top
//     //     let mid = Math.floor(this.length/2)
//     //     for(let i=0; i<mid; i++){
//     //         current = current.next
//     //     }
//     //     return current.data
        
//     // }

//     midElement() {
//         let current = this.top;
//         let mid = Math.floor(this.length / 2);
//         for (let i = 0; i < mid; i++) {
//             current = current.next;
//         }
//         return current.data;
//     }

//     rev(){
        
//         let reverse = ""
//         while(this.top!==null){
//             reverse.push(this.pop())
//         }
//         return reverse
//     }

// }
// const stk = new Stack()

// stk.push(20)
// stk.push(40)
// stk.push(80)
// stk.push(30)
// stk.push(100)
// stk.rev()
// // console.log(stk.rev(),'reverse');
// // stk.delete(80)
// // console.log(stk.midElement(),": middle element");
// // stk.pop()
// // console.log(stk.sum(),'sum of stack');
// // console.log(stk.reverse("hello"));
// stk.display()

// stack
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.length = 0
    }
    
    push(data){
        let newNode = new Node(data)
        if(this.top == null){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }
    
    pop(){
        let poppedData = this.top.data
        this.top = this.top.next
        return poppedData
    }
    
    display(){
        let temp = this.top
        while(temp !== null){
            console.log(temp.data)
            temp = temp.next
        }
    }
    
    reverse(str){
        for(let i=0; i<str.length; i++){
            this.push(str[i])
        }
        let revStr = ''
        while(this.top !== null){
            revStr += this.pop()
        }
        return revStr
    }
    
    sum(){
        let current = this.top
        let sum = 0
        while(current !== null){
            sum += current.data
            current = current.next
        }
        return sum
    }
    
    mid(){
        let middle = Math.floor(this.length/2)
        let current = this.top
        for(let i=0; i<middle; i++){
            current = current.next
        }
        return current.data
    }
    
    delete(deleteData){
        let prev = null
        let current = this.top
        while(current !== null && current.data == deleteData){
            this.top = current.next
            return
        }
        while(current !== null && current.data !== deleteData){
             prev = current
            current = current.next
        }
        prev.next = current.next
    }
}
const stk = new Stack()
stk.push(20)
stk.push(10)
stk.push(30)
stk.push(50)
stk.push(40)
stk.delete(30)
// console.log(stk.mid())
// console.log(stk.sum())
// stk.push("hello")
// stk.pop()
// console.log(stk.reverse("hello"))
stk.display()










