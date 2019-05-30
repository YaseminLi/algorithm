const { selectionSort} = require('./selection-sort');
const { insertionSort } = require('./insertion-sort');
const { mergeSort } = require('./merge-sort');
const { mergeSortFloor } = require('./merge-sort-floor');
const { quickSort} = require('./quick-sort');
const { quickSort2} = require('./quick-sort2');
const { quickSort3} = require('./quick-sort3');

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
    // selectionSort(arr);
    // insertionSort(arr);
    mergeSort(arr);//26ms
    // mergeSortFloor(arr)//29ms
    // quickSort(arr);
    // quickSort2(arr);
    // quickSort3(arr);
    const end = Date.now();
    console.log(end);
    const runTime = end - start;
    console.log('运行时间是：' + runTime)
}
// let arr=generateRandomArray(10000,0,10);
let arr = []
for (var i = 0 ; i < 100000; i++) {
    arr[i] = 100000-i;
}
runTime(arr);

//排序检验
const arrSort=mergeSortFloor(arr);
for (let i=0;i<arrSort.length;i++){
    if(arr[i]>arr[i+1]){
        console.log('排序错误');
        return;
    }
}