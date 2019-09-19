//实现一个最大堆
var MaxHeap = /** @class */ (function () {
    function MaxHeap(item) {
        var _this = this;
        //如果传入数字，给堆开辟相应的空间
        if (typeof item === 'number') {
            this.data = new Array(item + 1);
            this.count = 0;
            this.capacity = item;
        }
        //如果传入数组，将其转化为最大堆
        if (item instanceof Array) {
            this.data = new Array(item.length + 1);
            //将数组放入堆中存储，从索引1开始
            item.forEach(function (value, index) { _this.data[index + 1] = value; });
            this.count = item.length;
            for (var i = Math.floor(this.count / 2); i >= 1; i--) {
                this.shiftDown(i);
            }
        }
    }
    //从下往上比较节点大小
    MaxHeap.prototype.shiftUp = function (count) {
        var max = this.data[count];
        for (count; count > 1;) {
            var parentCount = Math.floor(count/2)
            if (max > this.data[parentCount]) {
                this.data[count] = this.data[parentCount];
                count = parentCount;
            }
            else {
                break;
            }
        }
        this.data[count] = max;
    };
    //从上往下比较节点大小
    MaxHeap.prototype.shiftDown = function (k) {
        var min = this.data[k];
        //节点有孩子时执行
        while (k * 2 <= this.count) {
            var j = k * 2;
            if (j + 1 <= this.count && this.data[j + 1] > this.data[j]) {
                j += 1;
            }
            if (min >= this.data[j]) {
                break;
            }
            this.data[k] = this.data[j];
            k = j;
        }
        this.data[k] = min;
    };
    //返回堆的大小
    MaxHeap.prototype.size = function () {
        return this.count;
    };
    //堆是否为空
    MaxHeap.prototype.isEmpty = function () {
        return this.count === 0;
    };
    //向堆中放入数据，放在末尾
    MaxHeap.prototype.insert = function (item) {
        console.assert(this.count<=this.capacity)
        this.data[this.count + 1] = item;
        this.count++;
        this.shiftUp(this.count);
    };
    MaxHeap.prototype.log = function () {
        console.log(this.data);
    };
    MaxHeap.prototype.extractMax = function () {
        console.assert(this.count>0)
        var item = this.data[1];
        this.data[1] = this.data[this.count];
        this.data.pop();
        this.count--;
        this.shiftDown(1);
        return item;
    };
    return MaxHeap;
}());


function maxHeap1(arr) {
    let maxHeap=new MaxHeap(arr.length)
    for(let i=0;i<arr.length;i++){
        maxHeap.insert(arr[i])
    }
    for(let i=arr.length-1;i>=0;i--){
        arr[i]=maxHeap.extractMax()
    }
    return arr
}
function maxHeap2(arr) {
    let maxHeap=new MaxHeap(arr)
    for(let i=arr.length-1;i>=0;i--){
        arr[i]=maxHeap.extractMax()
    }
    return arr
}
module.exports={maxHeap1,maxHeap2}