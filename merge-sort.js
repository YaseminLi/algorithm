//从上至底的归并
//分别对a[l,mid],a[mid+1,r]两个数组进行归并
function _merge(arr, l, mid, r) {
    let b = [];
    for (let i = l; i <= r; i++) {
        b[i - l] = arr[i]
    }
    for (let k = l, i = 0, j = mid - l + 1; k <= r; k++) {
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
            i++;
        }
    }
    return arr;
}
//对a[l...r]范围内数组进行排序
function _mergeSort(arr, l, r) {
    if (l < r) {
        const mid = Math.floor((l + r) / 2);
        _mergeSort(arr, l, mid);
        _mergeSort(arr, mid + 1, r);
        if (arr[mid] > arr[mid + 1]) { 
            arr = _merge(arr, l, mid, r); }
    }
    return arr;
}
function mergeSort(arr) {
    let l = 0;
    let r = arr.length - 1;
    return _mergeSort(arr, l, r)
}
// let arr = [8, 1, 5, 3, 7, 2, 4, 6];
// const arraySort = mergeSort(arr);
// console.log(arraySort);
module.exports = { mergeSort };