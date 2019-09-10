//实现一个最大堆
var MaxHeap = /** @class */ (function () {
    function MaxHeap(capacity) {
        this.data = new Array(capacity + 1);
        // this.data = Array.from({ length: capacity + 1 }, v => null)
        this.count = 0;
        this.capacity = capacity;
    }
    //从下往上比较节点大小
    MaxHeap.prototype.shiftUp = function (count) {
        var max = this.data[count];
        for (count; count > 1;) {
            var isLeft = count % 2;
            var parentCount = isLeft === 0 ? count / 2 : (count - 1) / 2;
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
            if (min > this.data[j]) {
                this.data[k] = min;
                break;
            }
            this.data[k] = this.data[j];
            k = j;
        }
        this.data[k] = min;
    };
    MaxHeap.prototype["delete"] = function () {
        //删除data
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
        if (this.count === this.capacity) {
            console.log('已经超出堆的容量');
        }
        this.data[this.count + 1] = item;
        this.count++;
        this.shiftUp(this.count);
    };
    MaxHeap.prototype.log = function () {
        console.log(this.data);
    };
    MaxHeap.prototype.extractMax = function () {
        if (this.count === 0) {
            return '堆中已经没有数据了';
        }
        var item = this.data[1];
        this.data[1] = this.data[this.count];
        this.data[this.count] = null;
        this.count--;
        this.shiftDown(1);
        return item;
    };
    return MaxHeap;
}());
var heap = new MaxHeap(10);
heap.insert(1);
heap.insert(3);
heap.insert(2);
heap.insert(6);
heap.insert(5);
heap.insert(4);
heap.log();
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
