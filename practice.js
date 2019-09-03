//selection sort
function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            let m = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = m
        }
    }
    return nums
}
console.log(selectionSort([1, 3, 8, 9, 2, 4, 7, 6, 5]));
