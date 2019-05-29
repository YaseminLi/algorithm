//对a[l..r]部分进行分区
//返回p,a[l...p-1]<a[p],a[p]<a[p+1,r]
function _quick2(arr,l,r) {
    let i=l+1;
    let j=r;
    //数组近乎有序时复杂度接近n2,随机找一个元素与第一个数交换
    const y=Math.floor(Math.random()*(r-l+1)+l);
    const z=arr[y];
    arr[y]=arr[l];
    arr[l]=z;
    let v=arr[l];
        for (i,j;i <j;) {
            //比基准元素小时，与a[j+1]交换位置
           
        }
        const x = arr[l];
        arr[l] = arr[j];
        arr[j] = x;
    return j;
}

//递归进行快速排序a[l...r]
function _quickSort2(arr,l,r){
    //if(r-l<15)数量少时可以用插入排序
    if(l>=r){
        return
    }
    let p=_quick2(arr,l,r);
    _quickSort2(arr,l,p-1);
    _quickSort2(arr,p+1,r);

}
function quickSort2(arr){
    let l=0;
    let n=arr.length-1;
    _quickSort(arr,l,n);
    return arr;
}
const arr =[ 3, 1, 3, 5, 3, 3, 2, 3, 3, 2 ];
const arrSort = quickSort2(arr);
console.log(arrSort);
// module.exports={quickSort}