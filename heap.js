// Min Heap
// class minHeap{
//   constructor(){
//       this.heap = []
//   }
  
//   getLeftChildIndex(index){
//       return 2 * index +1
//   }
  
//   getRightChildIndex(index){
//       return 2 * index +2
//   }
  
//   getParentIndex(index){
//       return Math.floor((index - 1)/2)
//   }
  
//   swap(index1,index2){
//       let temp = this.heap[index1] 
//       this.heap[index1] = this.heap[index2]
//       this.heap[index2] = temp
//   }
  
//   heapifyUp(index){
//       let parentIndex = this.getParentIndex(index)
//       if(parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
//           this.swap(index,parentIndex)
//           this.heapifyUp(parentIndex)
//       }
//   }
  
//   heapifyDown(index){
//       let leftChildIndex = this.getLeftChildIndex(index)
//       let rightChildIndex = this.getRightChildIndex(index)
      
//       let minIndex = index
      
//       if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]){
//           minIndex = leftChildIndex
//       }
      
//       if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]){
//           minIndex = rightChildIndex
//       }
      
//       if(minIndex !== index){
//           this.swap(index,minIndex)
//           this.heapifyDown(minIndex)
//       }
//   }

  
//   buildHeap(array){
//       this.heap = array
//       let firstNonleafIndex = Math.floor((array.length - 2)/2)
//       for(let i=firstNonleafIndex; i>=0; i--){
//           this.heapifyDown(i)
//       }
//   }
  
//   insert(value){
//       this.heap.push(value)
//       this.heapifyUp(this.heap.length-1)
//   }
  
//   remove(){
//            if (this.heap.length === 1) {

//            return this.heap.pop();

//            }
//       let min = this.heap[0]
//       this.heap[0] = this.heap.pop()
//       this.heapifyDown(0)
//       return min
//   }
  
//   heapSort(){
//       let sortedArr = []
//       while(this.heap.length > 0){
//           sortedArr.push(this.remove())
//       }
//       return sortedArr
//   }
// }

// const minheap = new minHeap()
// minheap.buildHeap([2,6,1,0,9,3,7])
// // minheap.buildHeap([3, 7, 2, 1, 9, 8])
// console.log(minheap.heap)
// console.log(minheap.remove())
// console.log(minheap.heap)
// console.log(minheap.heapSort())





// ================================= Max Heap
class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  

    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  

    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  

    swap(index1, index2) {
      const temp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = temp;
    }
  

    heapifyUp(index) {
      const parentIndex = this.getParentIndex(index);
      if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
        this.swap(index, parentIndex);
        this.heapifyUp(parentIndex);
      }
    }
  

    heapifyDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let maxIndex = index;
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]) {
        maxIndex = leftChildIndex;
      }
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[maxIndex]) {
        maxIndex = rightChildIndex;
      }
      if (maxIndex !== index) {
        this.swap(index, maxIndex);
        this.heapifyDown(maxIndex);
      }
    }
  

    insert(value) { 
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  

    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return max;
    }
  

    heapSort() {
      const sortedArray = [];
      while (this.heap.length > 0) {
        sortedArray.push(this.remove());
      }
      return sortedArray;
    }
  

    buildHeapFromArray(array) {
      this.heap = array;
      const firstNonLeafIndex = Math.floor((array.length - 2) / 2);
      for (let i = firstNonLeafIndex; i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
      
  }
    
  
    
  // ==================TEST CASES==================
  
  const maxHeap = new MaxHeap();
  
  maxHeap.buildHeapFromArray([3, 7, 2, 1, 9, 8]);
  
  console.log(maxHeap.heap); // [9, 7, 8, 1, 3, 2]
  
  console.log(maxHeap.remove()); // 9
  
  console.log(maxHeap.heap); // [8, 7, 2, 1, 3]
  
  console.log(maxHeap.heapSort()); // [1, 2, 3, 7, 8]