
// resolving collision using open hashing

// class Node {
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//         this.next = null;
//     }
// }

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(this.size).fill(null);
//     }

//     hashCode(key) {
//         // Convert the key to a string and hash its characters
//         let hash = 0;
//         for (let i = 0; i < key.length; i++) {
//             hash = (hash << 5) + key.charCodeAt(i);
//             hash = hash & hash; // Convert to 32bit integer
//             hash = Math.abs(hash); // Ensure non-negative value
//         }
//         return hash;
//     }

//     hashFunction(key) {
//         return this.hashCode(key) % this.size;
//     }

//     add(key, value) {
//         const index = this.hashFunction(key);
//         if (this.table[index] === null) {
//             this.table[index] = new Node(key, value);
//         } else {
//             let temp = this.table[index];
//             while (temp.next !== null) {
//                 temp = temp.next;
//             }
//             temp.next = new Node(key, value);
//         }
//     }

//     get(key) {
//         const index = this.hashFunction(key);
//         let temp = this.table[index];
//         while (temp !== null && temp.key !== key) {
//             temp = temp.next;
//         }
//         return temp !== null ? temp.value : null;
//     }

//     display() {
//         console.log("Hash Table:");
//         this.table.forEach((item, index) => {
//             process.stdout.write(`${index}: `);  // Print index

//             // If item is null, indicate an empty slot
//             if (item === null) {
//                 console.log("None");
//             } else {
//                 let current = item;
//                 while (current !== null) {
//                     process.stdout.write(`(${current.key}, ${current.value}) -> `);
//                     current = current.next;
//                 }
//                 console.log("None");  // Mark the end of the chain
//             }
//         });
//     }
// }

// // Usage
// const t = new HashTable(10);
// t.add("10", "helo");
// t.add("14", "hai");
// t.add("15", "heyy");
// t.add("20", "hoyy");
// t.display();
// console.log(t.get("20"));


// resolving collision using closed hashing

// class HashTable {
//     constructor(size) {
//         this.size = size;
//         this.table = new Array(size).fill(null);
//         console.log(this.table);
//     }

//     hashFun(key) {
//         return key % this.size;
//     }

//     add(key) {
//         const index = this.hashFun(key);
//         for (let i = 0; i < this.size; i++) {
//             const newIndex = (index + i) % this.size;
//             if (this.table[newIndex] === null) {
//                 this.table[newIndex] = key;
//                 return;
//             }
//         }
//         console.log("Hash table is full!");
//     }

//     display() {
//         console.log("Key-value pairs:");
//         this.table.forEach((value, index) => {
//             console.log(`${index}: ${value}`);
//         });
//     }
// }

// // Usage
// const list = new HashTable(10);
// list.add(12);
// list.add(22);
// list.add(38);
// list.add(41);
// list.add(48);

// list.display();




// class hashTable {
//     constructor(size){
//         this.size = size
//         this.table = new Array(size).fill(null)
//     }


// hashFunction(key){
//     return key % this.size
// }

// addKey(key){
//    const index = this.hashFunction(key)
//    this.table[index] = key
// }

// display(){
//     this.table.forEach((item, index)=>{
//         console.log(`${item}: ${index}`);
//     })
// }

// }

// const hash = new hashTable(5)
// hash.addKey(11)
// hash.addKey(13)
// hash.addKey(15)
// hash.display()




// class hashTable{
//     constructor(size){
//         this.size = size
//         this.table = new Array(size).fill(null)
//     }

//     hashFunction(key){
//         return key % this.size
//     }

//     addElement(key){
//         const index = this.hashFunction(key)
//         this.table[index] = key
//     }

//     display(){
//         this.table.forEach((item, index)=>{
//             console.log(`${item}:${index}`);
//         })
//     }
// }

// const hash = new hashTable(5)
// hash.addElement(14)
// hash.addElement(11)
// hash.addElement(29)

// hash.display()

class hashTable{
    constructor(size){
        this.size = size
        this.table = new Array(size).fill(null)
    }

    hashFunction(key){
        return key % this.size
    }

    addkey(key){
        const index = this.hashFunction(key)
        this.table[index] = key
    }

    display(){
       this.table.forEach((item, index)=>{
        console.log(`${item}:${index}`);
       })
    }
}
const list = new hashTable(5)
list.addkey(91)
list.addkey(70)
list.display()

