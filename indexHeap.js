class IndexHeap {
    constructor(item) {
        this.data = new Array(item) //存储数据
        this.count = 0 //数量
        this.indexes = new Array(item) //存储索引
        this.capacity = item //数组容量
    }
    shiftUp(k) {
        let maxIndex = this.indexes[k]
        for (k; k > 0;) {
            let parent = Math.floor((k - 1) / 2)
            if (this.data[maxIndex] > this.data[this.indexes[parent]]) {
                this.indexes[k] = this.indexes[parent]
                k = parent
            } else {
                break
            }
        }
        this.indexes[k] = maxIndex
    }
    shiftDown(k) {
        let minIndex = this.indexes[k]
        //有孩子的时候执行
        while (2 * k + 1 < this.count) {
            let j = 2 * k+1
            //有右孩子
            if (j + 1 < this.count && this.data[this.indexes[j + 1]] > this.data[this.indexes[j]]) {
                j += 1
            }
            if (this.data[minIndex] >= this.data[this.indexes[j]]) {
                break;
            }
            this.indexes[k] = this.indexes[j]
            k = j
        }
        this.indexes[k] = minIndex;

    }
    //insert从索引0开始 item为数据，i为索引
    insert(item, i) {
        console.assert(i >= 0 && i < this.capacity)
        this.data[i] = item
        this.indexes[this.count] = i
        this.shiftUp(this.count++)
    }
    //堆中最大数据
    extractMax() {
        console.assert(this.count > 0)
        let max = this.data[this.indexes[0]]
        this.count -= 1
        this.indexes[0] = this.indexes[this.count]
        this.indexes.pop()
        this.shiftDown(0)
        return max
    }
    //返回最大值的索引
    extractMaxIndex(){
        console.assert(this.count > 0)
        let max = this.indexes[0]
        this.count -= 1
        this.indexes[0] = this.indexes[this.count]
        this.indexes.pop()
        this.shiftDown(0)
        return max
    }
    //取出索引处的数据
    getItem(i){
        return this.data[i]
    }
    //将索引i处的数据修改为newItem
    change(i,newItem){
        console.assert(i >= 0 && i < this.capacity)
        this.data[i]=newItem
        //找到indexes[j]=i,将index[j]shiftUp,再shiftDown
        //findIndex时间复杂度为n shift为logn，整个change方法为o(n)
        let j=this.indexes.findIndex(value=>value===i)
        this.shiftUp(j)
        this.shiftDown(j)
    }
}

let indexHeap = new IndexHeap(6)
indexHeap.insert(10, 0)
indexHeap.insert(30, 1)
indexHeap.insert(20, 2)
indexHeap.insert(60, 3)
indexHeap.insert(50, 4)
indexHeap.insert(40, 5)
console.log(indexHeap.data);
console.log(indexHeap.indexes);
indexHeap.change(4,28)
console.log(indexHeap.data);
console.log(indexHeap.indexes);


