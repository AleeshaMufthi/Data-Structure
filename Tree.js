class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    
    insert(data){
        let newNode = new Node(data)
        if(this.root == null){
            this.root = newNode
            return
        }
        let temp = this.root
        while(temp !== null){
            if(data < temp.data){
                if(temp.left == null){
                    temp.left = newNode
                    return
                }else{
                    temp = temp.left
                }
            }else{
                 if(temp.right == null){
                    temp.right = newNode
                    return
                }else{
                    temp = temp.right
                }
            }
        }
    }
    
    contains(data){
        let temp = this.root
        while(temp !== null){
            if(data < temp.data){
                temp = temp.left
            }else if(data > temp.data){
                temp = temp.right
            }else{
                console.log(`${data}: is present`)
                return
            }
        }
         console.log('Data not found')
    }
    
    display(temp = this.root){
    
        if(temp !== null){
            this.display(temp.left)
            console.log(temp.data)
            this.display(temp.right)
        }
    }

    delete(key ) {
        this.root = this.helperDelete(this.root, key);
    }

    helperDelete(root, data) {
        if (root === null) {
            return root;
        }

        if (data < root.data) {
            root.left = this.helperDelete(root.left, data);
        } else if (data > root.data) {
            root.right = this.helperDelete(root.right, data);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.data = this.getMinvalue(root.right);
            root.right = this.helperDelete(root.right, root.data);
        }

        return root;
    }

    getMinvalue(root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root.data;
    }

        
    inOrder(temp = this.root){
        if(temp !== null){
        this.inOrder(temp.left)
        console.log(temp.data)
        this.inOrder(temp.right)
        }
    }
    
    preOrder(temp = this.root){
        if(temp !== null){
            console.log(temp.data)
            this.preOrder(temp.left)
            this.preOrder(temp.right)
        }
    }
    
    postOrder(temp = this.root){
        if(temp !== null){
            this.postOrder(temp.left)
            this.postOrder(temp.right)
            console.log(temp.data)
        }
    }
    
}
const search = new BinarySearchTree()
search.insert(90)
search.insert(60)
search.insert(120)
search.insert(20)
search.insert(40)
search.contains(10)
search.display()



// =================Find the closest value to a given number in a tree================

// closestValue(target) {
//     let closest = Infinity;
//     let temp = this.root;

//     while (temp !== null) {
//       if ( Math.abs(temp.data - target) < Math.abs(closest - target) && temp.data !== target) {
//         closest = temp.data;
//       }

//       if (target < temp.data) {
//         temp = temp.left;
//       } else {
//         temp = temp.right;
//       }
//     }

//     return closest;
//   }

// ===================validate Wheather BST or not===========


// validateBst(){
//     let values = []
//     this.inOrder(this.root,values)
    
//     for(let i=1; i<values.length; i++){
//         if(values[i] <= values[i+1]){
//             return false
//         }
//     }
//     return true
// }

