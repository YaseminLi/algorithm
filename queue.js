class Queue {
    constructor() {
        // this.array.fill(0, 0, n);
        this.array=[];
        this.end = 0
    }
    enqueue(x) {
        this.array[this.end++] = x;
        console.log(this.array)
    }
    dequeue() {
        const a = this.array[0];
        console.log('dequeue:'+a);
        for (let i = 0; i < this.end; i++) {
            this.array[i] = this.array[i + 1]
        }
        this.array.length=--this.end;
        console.log(this.array)
        return a
    }
    slice(){
        
    }
}
let queue = new Queue();
queue.enqueue(1);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();