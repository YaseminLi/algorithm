//selection sort
// function insertSort(nums) {
//     for (let i = 1; i < nums.length; i++) {
//         //寻找nums[i]的合适位置
//         for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
//             let m = nums[j]
//             nums[j] = nums[j - 1]
//             nums[j - 1] = m
//         }
//     }
//     return nums
// }
// console.log(insertSort([7, 3, 8, 9, 2, 4, 1, 6, 5]));

//bubble sort
function bubbleSort(nums) {
    let len = nums.length
    for (let i = len-1; i > 0; i--) {
        for(let j=0;j<i;j++){
            if(nums[j]>nums[j+1]){
                let m=nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=m
            }
        }
    }
    return nums
}
console.log(bubbleSort([7, 3, 8, 9, 2, 4, 1, 6, 5]));

