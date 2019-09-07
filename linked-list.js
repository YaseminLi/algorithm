//链表节点
class Node {
    constructor(element, next = null) {
        this.element = element //链表中节点的值
        this.next = next //当前节点指向下一个节点的指针
    }
}

//链表方法的实现
class LinkedList {
    constructor() {
        this.length = 0 //存储链表中节点的数量
        this.head = null //存储链表中第一个节点的引用
    }


    /* 向链表尾部添加一个新的项
    *@param {*} element 需要添加至链表中的节点项 */
    append(element) {
        let node = new Node(element)
        if (this.head === null) {
            //链表为空
            this.head = node
        } else {
            let current = this.head //将第一个节点的引用赋值给当前项
            while (current.next) { //列表循环，直到找出最后一项
                current = current.next
            }
            current.next = node //将最后一项的指针指向node,建立链接
        }
        this.length++
    }

    /**

   * 向列表的特定位置插入一个新的项

   * @param {*} position 插入链表中的位置

   * @param {*} element 需要添加的节点

   */
    insert(position, element) {
        let node = new Node(element)
        //判断位置是否越界
        if (position > -1 && position <= this.length) {
            let current = this.head
            let previous
            let index = 0
            //在第一个位置插入
            if (position == 0) {
                node.next = this.head
                this.head = node
            } else {
                // 需要找到特定的位子，将想要插入的元素放在previous节点和current节点之间
                while (index++ < position) {
                    // previous 将是对想要插入新元素的位置之前一个元素的引用
                    previous = current
                    // current 对想要插入新元素的位置之后一个元素的引用
                    //如a,b,c位置2中插入d,previous=b current=c
                    current = current.next
                }
                previous.next = node
                node.next = current
            }
            this.length++
            return true
        } else {
            return false
        }
    }


}
let a = new LinkedList()
a.append(1)
a.append(2)
console.log(a);
a.insert(1, 3)
console.log(a);

/* LinkedList {
  length: 2,
  head: Node { element: 1, next: Node { element: 2, next: null } } }
LinkedList {
  length: 3,
  head: Node { element: 1, next: Node { element: 3, next: [Node] } } }
} */

