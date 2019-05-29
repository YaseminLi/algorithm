//从底至上的归并
//分别对a[l,mid],a[mid+1,r]两个数组进行归并
function _merge(arr, l, mid, r) {
    let b = [];
    for (let i = l; i <= r; i++) {
        b[i-l] = arr[i]
    }
    for (let k = l, i = 0, j = mid-l+1; k <= r; k++) {
        //设置临界值
        if (i > mid-l) {
            arr[k] = b[j];
            j++;
        } else if (j > r-l) {
            //设置临界值
            arr[k] = b[i];
            i++;
        } else if (b[i] > b[j]) {
            arr[k] = b[j];
            j++;
        } else {
            arr[k] = b[i];
            i ++;
        }
    }
    return arr;
}

function mergeSortFloor(arr) {
    let len=arr.length
    for(let n=2;n/2<=len;n=n*2){
        //n代表每轮归并元素的个数
        for(let l=0;l<len;l+=n){
            let r=l+n-1;
            let mid=Math.floor((l+r)/2);
            if(arr[mid]>arr[mid+1])
            _merge(arr,l,mid,Math.min(r,len-1));
        }
    }
    return arr;
}
// let arr = [ 10, 1, 5, 6, 2, 8, 3, 9, 4, 7 ];
// const arraySort = mergeSortFloor(arr);
// console.log(arraySort);
module.exports={mergeSortFloor};