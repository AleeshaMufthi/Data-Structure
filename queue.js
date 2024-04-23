// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue {
//     constructor() {
//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(data) {
//         const newNode = new Node(data);
//         if (this.rear === null) {
//             this.front = newNode;
//         } else {
//             this.rear.next = newNode;
//         }
//         this.rear = newNode;
//     }

//     dequeue() {
//         this.front = this.front.next;
//     }

//     display() {
//         let temp = this.front;
//         while (temp !== null) {
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }

// const list = new Queue();
// list.enqueue(10);
// list.enqueue(20);
// list.enqueue(40);
// list.enqueue(90);
// // list.dequeue();
// list.display();

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.rear = null
//         this.front = null
//     }

//     enqueue(data){
//         let newNode = new Node(data)
//         if(this.front == null){
//             this.front = newNode
//         }else{
//             this.rear.next = newNode
//         }
//         this.rear = newNode
//     }

//     dequeue(){
//         this.front = this.front.next
//     }

//     display(){
//         let temp = this.front
//         while(temp !== null){
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }
// }
// const list = new Queue()
// list.enqueue(90)
// list.enqueue(80)
// list.enqueue(30)
// list.dequeue()
// list.display()

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Queue{
    constructor(){
        this.rear = null
        this.front = null
    }

    enqueue(data){
        let newNode = new Node(data)
        if(this.front == null){
            this.front = newNode
        }else{
            this.rear.next = newNode
        }
        this.rear = newNode
    }

    dequeue(){
        this.front = this.front.next
    }

    display(){
        let temp = this.front 
        while(temp !== null){
            console.log(temp.data)
            temp = temp.next
        }
    }
}
const queue = new Queue()
queue.enqueue(10)
queue.enqueue(30)
queue.dequeue()
queue.display()

