function shellSort(arr) {
    var len = arr.length;
    for (var fraction = Math.floor(len / 2); fraction > 0; fraction = Math.floor(fraction / 2)) {
        for (var i = fraction; i < len; i++) {
            for (var j = i - fraction; j >= 0 && arr[j] > arr[fraction + j]; j -= fraction) {
                var temp = arr[j];
                arr[j] = arr[fraction + j];
                arr[fraction + j] = temp;
            } 
        }
    }
    return arr;
}
const arr = [8, 1, 5, 3, 2, 6, 4, 7];
const arrSort = shellSort(arr);
console.log(arrSort);
    // let length = arr.length;
    // //gap为分成几个数组
    // let gap = Math.floor(length / 2);
    // for (gap; gap >= 1; gap=Math.floor(gap/2)) {
    //     console.log(gap);

    //     for (let i = 0; i < gap; i++) {
    //         //每个数组进行插入排序
    //         let arrGap = [];
    //         for (let j = i; j < length; j = j + gap) {
    //             arrGap.push(arr[j])
    //         }
    //         function insertionSort(arr) {
    //             for (var i = 1; i < arr.length; i++) {
    //                 var m = arr[i];
    //                 for (var j = i; j > 0 && arr[j - 1] > m; j--) {
    //                     arr[j] = arr[j - 1];
    //                 }
    //                 arr[j] = m;
    //             }
    //             return arr;
    //         }
    //         arrGap = insertionSort(arrGap);
    //         let m = i;
    //         for (let j = 0; j < arrGap.length; j++) {
    //             arr[m] = arrGap[j];
    //             // console.log(arr[m]);
    //             m = m + gap;

    //         }
    //         // console.log(arr);
    //     }
    // }

