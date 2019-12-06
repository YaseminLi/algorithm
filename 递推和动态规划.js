//斐波那契数列1，1，2，3，5……

//递推计算
//计算数列中第n个值
console.time()
function fi(n) {
    if (n === 1) {
        return 1
    } else if (n === 2) {
        return 1
    } else {
        return fi(n - 1) + fi(n - 2)
    }
}

console.log(fi(30))
console.timeEnd()


//动态规划计算
console.time()
function fi2(n) {
    let arr = [1, 1]
    for (let i = 2; i <= n - 1; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n - 1]
}
console.log(fi2(30))
console.timeEnd()
