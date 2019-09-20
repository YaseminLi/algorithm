function BinarySearchTree() {
    //node类表示树中的节点
    const Node = function (key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
    };
    //root表示根节点
    let root = null
    //count表示树中节点的数量
    let count = 0

    this.isEmpty = function () {
        return count === 0 ? false : true
    }
    this.size = function () {
        return count;
    }

    //插入节点 递归方法
    this.insert = function (key, value) {

        insert(root, key, value)
        function insert(node, key, value) {
            if (root === null) {
                count += 1
                root = new Node(key, value)
                return root
            }
            if (key === node.key) {
                node.value = value
            } else if (key > node.key) {
                node.right = insert(node.right, key, value)
            } else if (key < node.key) {
                node.left = insert(node.left, key, value)
            }
            return node
        }
    }

    //不用递归实现insert
    // this.insert = function (key, value) {
    //     if (root === null) {
    //    count+=1
    //         root = new Node(key, value)
    //     }
    //     let node = root
    //     while (node) {
    //         if(key===node.key){
    //             node.value=value
    //         }else if(key>node.key){
    //             if(!node.right){
    //                 node.right=new Node(key,value)
    //                 return
    //             }
    //            node=node.right
    //         }else if(key<node.key){
    //             if(!node.left){
    //                 node.left=new Node(key,value)
    //                 return
    //             }
    //             node=node.left
    //         }

    //     }
    // }

    //contain方法，是否包含某个key值的节点
    this.contain = function (key) {
        return contain(root, key)
        function contain(node, key) {
            if (node === null) {
                return false
            }
            if (node.key === key) {
                return true
            } else if (key > node.key) {
                return contain(node.right, key)
            } else {
                return contain(node.left, key)
            }
        }
    }

    //查找键值key的value
    this.serach = function (key) {
        return search(root, key)
        function search(node, key) {
            if (node === null) {
                return undefined
            }
            if (node.key === key) {
                return node.value
            } else if (key > node.key) {
                return search(node.right, key)
            } else {
                return search(node.left, key)
            }
        }
    }

    //前序遍历 根左右
    this.preOrder = function (root) {
        preOrder(root)
        function preOrder(node) {
            if (!node) {
                console.log(node.key)
                preOrder(node.left)
                preOrder(node.right)
            }
        }
    }

    //中序遍历 左根右
    this.inOrder = function (root) {
        inOrder(root)
        function inOrder(node) {
            if (!node) {
                inOrder(node.left)
                console.log(node.key)
                inOrder(node.right)
            }
        }
    }

    //后序遍历 左右根
    this.postOrder = function (root) {
        postOrder(root)
        function postOrder(node) {
            if (!node) {
                postOrder(node.left)
                postOrder(node.right)
                console.log(node.key)
            }
        }
    }

    //层序遍历
    this.levelOrder = function (root) {
        //存储层序遍历的数据
        let arr = []
        //通过一个数组来实现队列，该队列存放需要遍历的节点
        let queue = [root]
        while (queue[0]) {
            let node = queue[0]
            arr.push(node)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
            queue.shift()
        }
        return arr
    }

    //查找最小键值
    this.minKey = function () {
        console.assert(root !== null)
        let minKey=root.key
        let node=root
        while(node){
            if(node.left){
                node=node.left
                minKey=node.key
            }
        }
        return minKey
    }
    //查找最大键值
    this.maxKey = function () {
        console.assert(root !== null)
        let maxKey=root.key
        let node=root
        while(node){
            if(node.right){
                node=node.right
                maxKey=node.key
            }
        }
        return maxKey
    }
}