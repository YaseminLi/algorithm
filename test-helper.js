//生成随机数组
function generateRandomArray(n,rangeL,rangeR){
    let arr=[];
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*(rangeR-rangeL+1)+rangeL);
    }
    return arr;
}
//方法运行时间计算
function runTime(funcName,func){
    const start=Date.now();
    console.log(start);
    a();
    function a(){
        console.log('a')
    }
    const end=Date.now();
    console.log(end);
    
    const runTime=end-start;
    console.log(funcName+'的运行时间是：'+runTime)
}
module.exports= {generateRandomArray,runTime};