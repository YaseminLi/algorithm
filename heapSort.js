
function heapSort(arr) {
    let count=arr.length
    //对每个父节点执行shiftDown
    for (let i = Math.floor((count-1)/2); i >= 0; i--) {
        _shiftDown(i,count)
    }
    for(let i=count-1;i>0;i--){
        //交换根节点与堆的最后一个元素
        let m=arr[i]
        arr[i]=arr[0]
        arr[0]=m
        //每次循环堆中的元素个数-1
        _shiftDown(0,i)
    }
    //k为要shiftDown的索引，n为堆中元素个数
    function _shiftDown(k,n) {
        let min=arr[k]
        //节点有孩子时执行，因为堆从索引0 开始，<n
        while (k * 2+1 <n) {
            let j = k * 2+1
            if (j + 1 <n && arr[j + 1] > arr[j]) {
                j += 1
            }
            if (min >=arr[j]) {
                break
            }
            arr[k]=arr[j]
            k = j
        }
        arr[k]=min
    }
    return arr
}
// let arr=[1,3,2,6,5,4]
// heapSort(arr)
// console.log(arr);

module.exports={heapSort}