// const { selectionSort } = require('./selection-sort');
// const { insertionSort } = require('./insertion-sort');
// const { mergeSort } = require('./merge-sort');
// const { mergeSortFloor } = require('./merge-sort-floor');
// const { quickSort } = require('./quick-sort');
// const { quickSort2 } = require('./quick-sort2');
// const { quickSort3 } = require('./quick-sort3');
const { maxHeap1, maxHeap2 } = require('./maxHeap.js');
const { heapSort } = require('./heapSort');

//生成随机数组,n为元素个数，rangeL～rangeR为随机数字的范围
function generateRandomArray(n, rangeL, rangeR) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL);
    }
    return arr;
}
//判断数组是否是从小到大排序
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true
}

//sortName为算法名称，fn为排序方法，arr为要排序的数组
function testSortTime(sortName, fn, arr) {
    const startTime = Date.now();
    fn(arr)
    const endTime = Date.now();
    console.assert(isSorted(arr));
    const runTime = (endTime - startTime) / 1000 + 's'
    console.log(sortName + ':' + runTime)
}
let arr = generateRandomArray(10000, 0, 10000)

// testSortTime('selection-sort',selectionSort,arr)
// testSortTime('quick-sort3',quickSort3,arr)
// testSortTime('quick-sort2',quickSort2,arr)
testSortTime('maxHeap1',maxHeap1,arr)
testSortTime('maxHeap2',maxHeap2,arr)
testSortTime('heapSort', heapSort, arr)

