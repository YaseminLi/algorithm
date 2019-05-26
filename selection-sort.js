const {generateRandomArray,runTime}=require('./test-helper');
//数组进行选择排序
// [8,5,1,5,3,7,2,4,6]
//找出未排序的元素中最小的，和第一位换位置
// [1,5,8,5,3,7,2,4,6]
//剩下7个中找出最小的，和第二换位置
// [1,2,8,5,3,7,5,4,6]
//……

// 方法1:
// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = findIndex(arr[i],i,arr);
//         function findIndex(num,i,arr) {
//             let index;
//             for (let j = i; j < arr.length; j++) {
//                 if (num >= arr[j]) {
//                     num = arr[j]
//                     index = j;
//                 }
//             }
//             return index;
//         }
//         let m=arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = m;
//     }
//     return arr;
// }

//方法2:优化后
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j=i;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
        }
        let m=arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = m;
    }
    console.log(arr);
    return arr;
}
// const arr = [8, 1, 5, 3, 7, 2, 4, 6];//OK
//const arr=[1.8,0.2,9.0,10,9,1.54];//9.0排序后变成9？
// const arr=['a','c','A','Z','d','M'];//OK
// console.log(selectionSort(arr));

const arr=generateRandomArray(10,0,10);

 runTime('selectionSort',selectionSort(arr));

//数组对象根据键值排序
// function selectionSortObject(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for(let j=i;j<arr.length;j++){
//             if(arr[minIndex][property？？]>arr[j][property]){
//                 minIndex=j;
//             }
//         }
//         let m=arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = m;
//     }
//     console.log(arr);
//     return arr;
// }
// const arr=[{'xiaoming':98},{'xiaohong':96}]
// console.log(selectionSortObject(arr));