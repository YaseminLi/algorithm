//实现一个最大堆
class MaxHeap {
    private data: Array<number> //存储数据的数组
    private count: number //数据量
    private capacity: number //数组空间

    constructor(item) {
        //如果传入数字，给堆开辟相应的空间
        if(typeof item==='number'){
            this.data = new Array(item + 1)
            this.count = 0
            this.capacity = item
        }
        //如果传入数组，将其转化为最大堆
        if(item instanceof Array){
            this.data=new Array(item.length+1)
            //将数组放入堆中存储，从索引1开始
            item.forEach((value,index)=>{this.data[index+1]=value})
            this.count=item.length
            for(let i=Math.floor(this.count/2);i>=1;i--){
                this.shiftDown(i)
            }
        }
    }

    //从下往上比较节点大小
    private shiftUp(count) {
        let max = this.data[count]
        for (count; count > 1;) {
            var parentCount = Math.floor(count/2)
            if (max > this.data[parentCount]) {
                this.data[count] = this.data[parentCount]
                count = parentCount
            } else {
                break
            }
        }
        this.data[count] = max
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
            if (min >= this.data[j]) {
                break
            }
            this.data[k] = this.data[j]
            k = j
        }
        this.data[k] = min
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
        console.assert(this.count<=this.capacity)
        this.data[this.count + 1] = item
        this.count++
        this.shiftUp(this.count)
    }
    log() {
        console.log(this.data)
    }
    extractMax() {
        console.assert(this.count>0)
        let item = this.data[1]
        this.data[1] = this.data[this.count]
        this.data[this.count] = null
        this.count--
        this.shiftDown(1)
        return item
    }
}
let arr=[1,3,2,6,5,4]
let maxheap=new MaxHeap(arr)
for(let i=arr.length-1;i>=0;i--){
    arr[i]=maxheap.extractMax()
}
console.log(arr);



