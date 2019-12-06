//冒泡排序
//方法一：单向循环，找最大值，从左到右循环
 function bubbleSort(arr) {
    //每轮交换，将最大数放到队尾
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let m = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = m;
            }
        }
    }
    return arr;
}

//方法二：正反冒泡同时进行，比方法一稍微快一点
function bubbleSort2(arr) {
     let low=0
     let high=arr.length-1
     //当low小于high时，执行正反循环
     while(low<high){
         //最大值放到最后
        for (let i = 0; i < high; i++) {
            if (arr[i] > arr[i + 1]) {
                let m = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = m;
            }
          
        }
        high--
        //从后往前比，最小值放到前面
//此时high+1是本轮的最大值，不用再参与比较
        for (let i = high; i >0; i--) {
            if (arr[i] <arr[i - 1]) {
                let m = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = m;
            } 
        }
        low++
     }
    return arr;
}
module.exports={bubbleSort,bubbleSort2}
// const arr = [8, 1, 5, 3, 2, 6, 4, 7];
// const arrSort = bubbleSort2(arr);
// console.log(arrSort)
