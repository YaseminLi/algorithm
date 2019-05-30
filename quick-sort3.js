//三路快速排序
//对a[l..r]部分进行分区
function _quick3(arr, l, r) {
    //数组近乎有序时复杂度接近n2,随机找一个元素与第一个数交换
    const y = Math.floor(Math.random() * (r - l + 1) + l);
    const z = arr[y];
    arr[y] = arr[l];
    arr[l] = z;
    let v = arr[l];
    let i = l + 1;//arr[lt+1...i-1]=v
    let lt = l;//arr[l+1...lt]<v
    let gt = r+1;////arr[gt...r]>v
    while (i<gt) {
        if(arr[i]<v){
            const a=arr[i];
            arr[i]=arr[lt+1];
            arr[lt+1]=a;
            lt++;
            i++;
        }else if(arr[i]>v){
            const a=arr[i];
            arr[i]=arr[gt-1];
            arr[gt-1]=a;
            gt--;
        }else{
            i++;
        }  
    }
    const x = arr[l];
    arr[l] = arr[lt];
    arr[lt] = x;
    return [lt, gt];
}

//递归进行快速排序a[l...r]
function _quickSort3(arr, l, r) {
    //优化：if(r-l<15)数量少时可以用插入排序
    if (l >= r) {
        return
    }
    let [lt, gt] = _quick3(arr, l, r);
    _quickSort3(arr, l, lt);
    _quickSort3(arr, gt, r);

}
function quickSort3(arr) {
    let l = 0;
    let n = arr.length - 1;
    _quickSort3(arr, l, n);
    return arr;
}
const arr = [3, 1, 3, 5, 3, 3, 2, 3, 3, 2];
const arrSort = quickSort3(arr);
console.log(arrSort);
module.exports = { quickSort3 }