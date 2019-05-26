
function bubbleSort(arr){
    //每轮交换，将最大数放到队尾
    for(let i=arr.length;i>0;i--){
        for(let j=0;j<i-1;j++)
        if(arr[j]>arr[j+1]){
            let m=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=m;
        }
        console.log(arr);
    }
    return arr;
}
const arr = [8,1,5,3,2,6,4,7];
const arrSort=bubbleSort(arr);
console.log(arrSort);
