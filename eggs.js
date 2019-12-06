//两个鸡蛋100层楼
// function num(n) {
//     let arr = [0, 1, 2]
//     let floor=null
//     for (let i = 3; i <= n; i++) {
//         let minCount = null
//         //第一个鸡蛋从第一层开始放
//         for (let j = 1; j <= i; j++) {
//             //第一个鸡蛋没有碎
//             let sucCount = 1 + arr[i - j]
//             //第一个鸡蛋碎了
//             let falCount = 1 + j - 1
//             let badCount = Math.max(sucCount, falCount)
//             if (!minCount||minCount>=badCount) {
//                 minCount = badCount
//                 floor=j
//             } 
//         }
//         arr[i]=minCount

//     }
//     return [arr[n],floor]
// }
// let result = num(3)
// console.log(result);

// function num(n) {
//     //每一项第一个数为最少次数，第二个数为这种扔法的第一个楼层
//     let arr = [[0, 0], [1, 1], [2, 2]]
//     let floor = null
//     for (let i = 3; i <= n; i++) {
//         let minCount = null
//         //第一个鸡蛋从第一层开始放
//         for (let j = 1; j <= i; j++) {
//             //第一个鸡蛋没有碎
//             let sucCount = 1 + arr[i - j][0]
//             //第一个鸡蛋碎了
//             let falCount = 1 + j - 1
//             let badCount = Math.max(sucCount, falCount)
//             if (!minCount || minCount > badCount) {
//                 minCount = badCount
//                 floor = j
//             }
//         }
//         arr[i] = [minCount, floor]

//     }
//     return [arr[n][0], arr[n][1]]
// }

//n个鸡蛋，m层楼
function num(m, n) {
    //outArr[n][m]为那个鸡蛋判断m层楼时最少次数
    let outArr = [0, 1]
    //i为鸡蛋数
    //j为楼层数
    //k为第一次扔鸡蛋的楼层数
    for (let i = 1; i <= n; i++) {
        //内层遍历，inArr为i个鸡蛋来判断不同的楼层
        let inArr = [0, 1, 2]
        for (let j = 3; j <= m; j++) {
            if(i===1){
                inArr[j]=j;
                continue
            }
            let minCount = null
            //第一个鸡蛋从第一层开始放
            for (let k = 1; k <= j; k++) {
                //第一个鸡蛋没有碎,鸡蛋数没变，楼层数减少
                let sucCount = 1 + inArr[j - k]
                //第一个鸡蛋碎了，鸡蛋数减少
                let falCount = 1 + outArr[i-1][k-1]
                let badCount = Math.max(sucCount, falCount)
                if (!minCount || minCount >= badCount) {
                    minCount = badCount
                }
            }
            inArr[j] = minCount
        }
        outArr[i] = inArr

    }
    return outArr[n][m]
}
let result=num(100,3)
console.log(result)