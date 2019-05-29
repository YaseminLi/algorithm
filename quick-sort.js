//快速排序
//arr[l]为挑出的基准元素
//arr[l+1...j]为比基准元素小的元素
//arr[j+1...i-1]为比基准元素大的元

//对a[l..r]部分进行分区
//返回p,a[l...p-1]<a[p],a[p]<a[p+1,r]
function _quick(arr,l,n) {
    let i=l+1;
    let j=l;
    //数组近乎有序时复杂度接近n2,随机找一个元素与第一个数交换
    const y=Math.floor(Math.random()*(n-l+1)+l);
    const z=arr[y];
    arr[y]=arr[l];
    arr[l]=z;
    let v=arr[l];
        for (i,j;i <=n; i++) {
            //比基准元素小时，与a[j+1]交换位置
            if (v > arr[i]) {
                const m = arr[j+1]; 
                arr[j+1] = arr[i];
                arr[i] = m;
                j++;
            }
        }
        const x = arr[l];
        arr[l] = arr[j];
        arr[j] = x;
    return j;
}

//递归进行快速排序a[l...r]
function _quickSort(arr,l,r){
    //if(r-l<15)数量少时可以用插入排序
    if(l>=r){
        return
    }
    let p=_quick(arr,l,r);
    _quickSort(arr,l,p-1);
    _quickSort(arr,p+1,r);

}
function quickSort(arr){
    let l=0;
    let n=arr.length-1;
    _quickSort(arr,l,n);
    return arr;
}
// const arr =[ 10, 1, 5, 6, 2, 8, 3, 9, 4, 7 ];
// const arrSort = quickSort(arr);
// console.log(arrSort);
module.exports={quickSort}