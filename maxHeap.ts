//实现一个最大堆
class MaxHeap {
    private data: Array<number>
    private count: number
    private capacity: number
    //从下往上比较节点大小
    private shiftUp(count) {
        let max=this.data[count]
        for (count; count > 1;) {
            let isLeft = count % 2
            var parentCount = isLeft === 0 ? count / 2 : (count - 1) / 2;
            if (max> this.data[parentCount]) {
               this.data[count]=this.data[parentCount]
                count = parentCount
            } else {
                break
            }
        }
        this.data[count]=max
    }
    //从上往下比较节点大小
    private shiftDown(k) {
        let min = this.data[k]
        //节点有孩子时执行
        while (k * 2 <= this.count) {
            let j = k * 2
            if (j + 1 <= this.count && this.data[j + 1] > this.data[j]) {
                j += 1
            }
            if (min > this.data[j]) {
                this.data[k] = min
                break
            }
            this.data[k] = this.data[j]
            k = j
        }
        this.data[k] = min
    }
    constructor(capacity) {
        this.data = new Array(capacity + 1)
        // this.data = Array.from({ length: capacity + 1 }, v => null)
        this.count = 0
        this.capacity = capacity
    }
    delete() {
        //删除data
    }
    //返回堆的大小
    size() {
        return this.count
    }
    //堆是否为空
    isEmpty() {
        return this.count === 0
    }
    //向堆中放入数据，放在末尾
    insert(item) {
        if (this.count === this.capacity) {
            console.log('已经超出堆的容量');
        }
        this.data[this.count + 1] = item
        this.count++
        this.shiftUp(this.count)
    }
    log() {
        console.log(this.data)
    }
    extractMax() {
        if(this.count===0){
            return '堆中已经没有数据了'
        }
        let item = this.data[1]
        this.data[1] = this.data[this.count]
        this.data[this.count] = null
        this.count--
        this.shiftDown(1)
        return item
    }
}


