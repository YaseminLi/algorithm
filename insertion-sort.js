//插入排序法
//数组进行选择排序
// [8,5,1,3,7,2,4,6]
//取第二个元素，与前面元素比大小
// [5,8,1,3,7,2,4,6]
//取第三个元素，与第二个元素比大小，如果交换了位置，再和第一个元素比大小
// [5,1,8,3,7,2,4,6]
//……
// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         // for(let j=i;j>0;j--){
//         //     if(arr[j]<arr[j-1]){
//         //         const m=arr[j];
//         //         arr[j]=arr[j-1];
//         //         arr[j-1]=m
//         //     }else{
//         //         break;
//         //     }
//         // }  
//         for(let j=i;j>0&&arr[j]<arr[j-1];j--){
//                 const m=arr[j];
//                 arr[j]=arr[j-1];
//                 arr[j-1]=m
//         }  
//     }
//     return arr;
// }
//每次比较涉及3次赋值，耗时，优化成多次比较后的一次赋值
// function insertionSort(arr) {
//     for (var i = 1; i < arr.length; i++) {
//         var m = arr[i];
//         for (var j = i; j >0; j--) {
//             if (m < arr[j-1]) { 
//                 arr[j] = arr[j-1]; 
//                 if(j==1){
//                     arr[j-1]=m
//                 }
//             }else{
//                 arr[j]=m;
//                 break;
//             }
//         }
//         console.log(arr)
//     }
//     return arr;
// }
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var m = arr[i];
        for (var j = i; j >0&&arr[j-1]>m; j--) {
                arr[j] = arr[j-1]; 
        }
        arr[j]=m;
    }
    return arr;
}

const array = [8,1,2,3,5,6,4,7];
const arraySort = insertionSort(array);
console.log(arraySort)