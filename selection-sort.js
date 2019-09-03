//数组进行选择排序
// [8,5,1,5,3,7,2,4,6]
//找出未排序的元素中最小的，和第一位换位置
// [1,5,8,5,3,7,2,4,6]
//剩下7个中找出最小的，和第二换位置
// [1,2,8,5,3,7,5,4,6]
//……

//方法2:优化后
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        //寻找未排序数组中最小元素的索引
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        //将找到的最小元素放入位置i
        if (i !== minIndex) {
            let m = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = m;
        }
    }
    return arr;
}
module.exports = { selectionSort }
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

