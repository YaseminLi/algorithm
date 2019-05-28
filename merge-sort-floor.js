//从底至上的归并
//分别对a[l,mid],a[mid+1,r]两个数组进行归并
function _merge(arr, l, mid, r) {
    let b = [];
    for (let i = l; i <= r; i++) {
        b[i-l] = arr[i]
    }
    for (let k = l, i = 0, j = mid-l+1; k <= r; k++) {
        //设置临界值
        if (i > mid) {
            arr[k] = b[j];
            j++
        } else if (j > r) {
            //设置临界值
            arr[k] = b[i];
            i++
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
    for(let n=2;n<=arr.length;n=n*2){
        for(let l=0;l+n-1<=arr.length-1;l+=n){
            let r=l+n-1
            let mid=Math.floor((l+r)/2);
            _merge(arr,l,mid,r);
        }
    }
    return arr;
}
// let arr = [8, 1, 5, 3, 7, 2, 4, 6];
// const arraySort = mergeSortFloor(arr);
// console.log(arraySort);
module.exports={mergeSortFloor};