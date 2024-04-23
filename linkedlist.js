class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null
    }

    addNode(data){
        let newNode=new Node(data)
        if(this.head==null){
            this.head=newNode
        }else{
            this.tail.next=newNode
        }
        this.tail=newNode
    }

    displayNode(){
        let temp=this.head
        while(temp!==null){
            console.log(temp.data);
            temp=temp.next
        }
    }

//     insertBegenning(data){
//         let newNode=new Node(data)
//         newNode.next=this.head
//         this.head=newNode
//     }

//     insertEnd(data){
//         let newNode=new Node(data)
//         this.tail.next=newNode
//         this.tail=newNode
//     }
//     insertAfter(nextTo, data){
//         let newNode =new Node(data)
//         let temp=this.head
//         while(temp!==null && temp.data!==nextTo){
//             temp=temp.next
//         }
//         if(this.tail==nextTo){
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//         newNode.next=temp.next
//         temp.next=newNode
//     }

// deleteNode(deleteData){
//     let temp=this.head
//     let prev =null
//     if(temp.data==deleteData){
//          this.head=temp.next
//          return
//     }
//     while(temp!==null && temp.data!==deleteData){
//         prev=temp
//         temp=temp.next
//     }
//     if(this.tail==deleteData){
//         this.tail=prev
//         this.tail.next=null
//     }
//     prev.next=temp.next
// }

}
const ll=new linkedList()
ll.addNode(10)
ll.addNode(20)
ll.addNode(30)
// ll.insertBegenning(100)
// ll.insertEnd(100)
// ll.insertAfter(20,200)
// ll.deleteNode(10)
ll.displayNode()

// // array into linkedlist
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     addNode(data){
//         let newNode=new Node(data)
//         if(this.head==null){
//             this.head=newNode
//         }else{
//             this.tail.next=newNode
//         }
//         this.tail=newNode
//     }

//     displayNode(){
//         let temp=this.head
//         while(temp!==null){
//             console.log(temp.data)
//             temp=temp.next
//         }
//     }
//     reverse(){
//         let temp=this.head
//         let prev=null
//         while(temp!==null){
//             let next=temp.next
//             temp.next=prev
//             prev=temp
//             temp=next
//         }
//         this.head=prev
//     }

//     searchNode(searchData){
//         let temp=this.head
//         let pos=1
//         while(temp!==null && temp.data!==searchData){
//             pos++
//             temp=temp.next
//         }
//         if(temp!==null){
//             return pos
//         }else{
//             return -1
//         }
//     }
// }
// const list=new linkedList()
// list.addNode(10)
// list.addNode(20)
// list.addNode(30)
// list.addNode(40)
// list.displayNode()
// list.searchNode(30)
// list.displayNode()





