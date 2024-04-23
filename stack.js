
// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }

//     push(data){
//         let newNode = new Node(data)
//         if(this.top == null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top 
//             this.top = newNode
//         }
//     }

//     pop(){
//         this.top = this.top.next
//     }

//     isEmpty(){
//         if(this.top == null){
//             console.log('Stack is Empty')
//         }else{
//             console.log('Stack contain elements');
//         }
//     }

//     peek(){
//         console.log(this.top.data);
//     }

//     delete(deleteData){

//         let current = this.top 
//         let prev = null

//         if(current !== null && current.data == deleteData){
//             this.top = current.next
//             return
//         }

//         while(current !== null && current.data !== deleteData){
//             prev = current
//             current = current.next
//         }

//         prev.next = current.next
//     }

//     display(){
//         let temp = this.top 
//         while(temp !== null){
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }
// }

// const Stk = new Stack()
// Stk.push(10)
// Stk.push(30)
// Stk.push(50)
// Stk.push(70)
// Stk.delete(50)
// Stk.isEmpty()
// Stk.peek()
// Stk.pop()
// Stk.display()


// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.top = null
//     }

//     push(data){
//         let newNode = new Node(data)
//         if(this.top == null){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     }

//     pop(){
//         let poppedData = this.top.data
//         this.top = this.top.next
//         return poppedData
//     }

//     delete(deleteData){

//         let current = this.top 
//         let prev = null

//         if(current !== null && current.data == deleteData){
//             this.top = current.next
//             return
//         }

//         while(current !== null && current.data !== deleteData){
//             prev = current
//             current = current.next
//         }

//         prev.next = current.next
//     }

//     reverse(str){
//         let stack = new Stack()
//         for(let i=0; i<str.length; i++){
//             stack.push(str[i])
//         }

//         let reversedString = ' '
//         while(stack.top !== null){
//             reversedString += stack.pop()
//         }
//         console.log(reversedString);
//     }

//     display(){
//         let temp = this.top
//         while(temp !== null){
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }
// }

// const stk = new Stack()
// // stk.push(20)
// // stk.push(40)
// stk.push('Hello')

// stk.pop()
// stk.reverse('Hello')
// stk.display()

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
    }

    push(data){
        let newNode = new Node(data)
        if(this.top == null){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
    }

    display(){
        let temp = this.top
        while(temp !== null){
            console.log(temp.data)
            temp = temp.next
        }
    }

    pop(){
        this.top = this.top.next
    }
}
const stk = new Stack()
stk.push(10)
stk.push(20)
stk.push(90)
stk.push(30)

stk.pop()

stk.display()

