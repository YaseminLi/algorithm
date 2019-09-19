//二分查找法
//只适用于有序数组，通过取中间值来不断缩小查找范围来找到目标值,存在返回索引，不存在返回-1
function binarySearch(arr, target) {
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)//查找范围的中间值
        if (arr[mid] === target) {
            return mid
        }
        if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}
 let arr = [1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 5, 5, 5, 6, 6, 6]
let target = 2
console.log(binarySearchFloor(arr, target))
console.log(binarySearchCeil(arr, target))
console.log(binarySearch(arr, target))

//floor方法：返回目标值第一次出现的位置或者目标值不存在时最后一个比目标值小的元素
// 如果找到target, 返回第一个target相应的索引index
// 如果没有找到target, 返回比target小的最大值相应的索引, 如果这个最大值有多个, 返回最大索引
// 如果这个target比整个数组的最小元素值还要小, 则不存在这个target的floor值, 返回-1
function binarySearchFloor(arr, target) {
    if(arr[0]>target){
        return -1
    }
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    while (l <r) {
        let mid = Math.floor((l + r) / 2)+1//查找范围的中间值
        if (arr[mid] < target) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    if(l+1<arr.length&&arr[l+1]===target){
        return l+1
    }
    return arr[l]
}

//ceil方法：返回目标值最后一次出现的位置或者不存在时第一个比目标值大的元素
// 如果找到target, 返回最后一个target相应的索引index
// 如果没有找到target, 返回比target大的最小值相应的索引, 如果这个最小值有多个, 返回最小的索引
// 如果这个target比整个数组的最大元素值还要大, 则不存在这个target的ceil值, 返回整个数组元素个数n
function binarySearchCeil(arr, target) {
    //在arr[l……r]范围内查找目标值
    let l = 0;
    let r = arr.length - 1
    if(arr[r]<target){
        return r+1
    }
    while (l <r) {
        let mid = Math.floor((l + r) / 2)-1//查找范围的中间值
        if (arr[mid] <= target) {
            l = mid+1
        } else {
            r =mid
        }
    }
    if(r-1>0&&arr[r-1]===target){
        return r-1
    }
    return arr[r]
}