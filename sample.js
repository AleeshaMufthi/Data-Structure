// review Question

class minHeap{
    constructor(){
        this.heap = []
    }

    getLeftChildIndex(index){
        return index * 2 + 1
    }

    getRightChildIndex(index){
        return index * 2 + 2
    }

    getParentIndex(index){
        return Math.floor((index - 1)/2)
    }

    swap(index1, index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index)

        if(parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]){
            this.swap(index, parentIndex)
            this.heapifyUp(parentIndex)
        }
    }

    heapifyDown(index){
        let leftChildIndex = this.getLeftChildIndex(index)
        let rightChildIndex = this.getRightChildIndex(index)

        let minIndex = index

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]){
            minIndex = leftChildIndex
        }

        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]){
            minIndex = rightChildIndex
        }

        if(minIndex !== index){
            this.swap(index, minIndex)
            this.heapifyDown(minIndex)
        }
    }

    buildHeap(array){
        this.heap = array
        let firstNonLeafIndex = Math.floor((array.length - 2)/2)
        for(let i=firstNonLeafIndex; i>=0; i--){
            this.heapifyDown(i)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    
}
const minheap = new minHeap()
minheap.buildHeap([1,2,3,4,5,6,9])
minheap.insert(23)
console.log(minheap.heap)