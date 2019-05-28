const { selectionSort} = require('./selection-sort');
const { insertionSort } = require('./insertion-sort');
const { mergeSort } = require('./merge-sort');
const { mergeSortFloor } = require('./merge-sort-floor');

//生成随机数组
function generateRandomArray(n, rangeL, rangeR) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL);
    }
    return arr;
}
//方法运行时间计算
function runTime(arr) {
    const start = Date.now();
    console.log(start);
    // selectionSort(arr);//77ms
    // insertionSort(arr);//39ms
    mergeSort(arr);//25ms
    // mergeSortFloor(arr)//29ms
    const end = Date.now();
    console.log(end);
    const runTime = end - start;
    console.log('运行时间是：' + runTime)
}
// let arr=generateRandomArray(10000,0,10000);
let arr = []
for (var i = 0 ; i < 10000000; i++) {
    arr[i] = 10000000-i;
}
runTime(arr);