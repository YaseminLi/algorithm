//实现
class Stuck {
    constructor(n) {
        this.arr = [].fill(0, 0, n);
        this.topA = -1;//放入位置的前一个坐标
        this.topB = n - 1;//放入位置的坐标

    }
    pushA(x) {
        if (this.topA == this.topB) {
            console.log('放不进去了！')
        } else {
            this.arr[++this.topA] = x;
            console.log(this.arr);
            return this.arr;
        }

    }
    pushB(x) {
        if (this.topA == this.topB) {
            console.log('放不进去了！')
        } else {
            this.arr[this.topB--] = x;
            console.log(this.arr);

            return this.arr;
        }

    }
    popA() {
        const a = this.arr[this.topA--];
        return a;
    }
    popB() {
        const a = this.arr[++this.topB];
        return a;
    }
}
let stuck = new Stuck(4);

// stuck.popA()
stuck.pushA(1);
stuck.pushA(1);
stuck.pushA(1);
stuck.pushA(1);
stuck.pushA(1);
// stuck.popA();
// stuck.pushB(2);
// stuck.popB();
// stuck.pushB(2);
// stuck.pushA(3);
// // stuck.pushA(3);
// stuck.pushB(1);
// stuck.pushB(1);
// stuck.pushB(1);
// stuck.pushB(1);
// stuck.pushB(1);