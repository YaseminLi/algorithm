//插入排序法 扑克牌
//数组进行选择排序
// [8,5,1,3,7,2,4,6]
//在已排序序列中从后向前扫描，找到相应位置并插入。
function insertionSort(arr) {
    //将第i个元素向前插入到相应位置
    for (var i = 1; i < arr.length; i++) {
        var m = arr[i];
        //从后向前扫描已排序的数组
        for (var j = i; j >0&&arr[j-1]>m; j--) {
                arr[j] = arr[j-1]; 
        }
        //在相应位置插入
        arr[j]=m;
    }
    return arr;
}
module.exports={insertionSort}
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
