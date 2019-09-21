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
    this.root = function () {
        return root;
    }
    //插入节点 递归方法
    this.insert = function (key, value) {
        if (root === null) {
            root = new Node(key, value)
            return root
        }
        return insert(root, key, value)
        function insert(node, key, value) {
            if (node === null) {
                node = new Node(key, value)
                return node
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


    //contain方法，是否包含key值节点
    this.contain = function (key) {
        console.assert(root, '二叉树为空')
        return _contain(root, key)
    }

    //contain node为根节点的二叉树中是否包含key值节点
    function _contain(node, key) {
        if (node === null) {
            return false
        }
        if (node.key === key) {
            return true
        } else if (key > node.key) {
            return _contain(node.right, key)
        } else {
            return _contain(node.left, key)
        }
    }
    //查找键值key的value
    this.search = function (key) {
        console.assert(root, '二叉树为空')
        let node = _search(root, key)
        return node ? node.value : `该二叉树中没有key=${key}的节点`

    }
    //查找node为根节点的二叉树中键值key的节点
    function _search(node, key) {
        if (node === null) {
            return null
        }
        if (node.key === key) {
            return node
        } else if (key > node.key) {
            return _search(node.right, key)
        } else {
            return _search(node.left, key)
        }
    }
    //前序遍历 根左右
    this.preOrder = function () {
        console.assert(root, '二叉树为空')
        preOrder(root)
        function preOrder(node) {
            if (node) {
                console.log(node.key)
                preOrder(node.left)
                preOrder(node.right)
            }
        }
    }

    //中序遍历 左根右 从小到大
    this.inOrder = function () {
        console.assert(root, '二叉树为空')
        inOrder(root)
        function inOrder(node) {
            if (node) {
                inOrder(node.left)
                console.log(node.key)
                inOrder(node.right)
            }
        }
    }

    //后序遍历 左右根
    this.postOrder = function () {
        console.assert(root, '二叉树为空')
        postOrder(root)
        function postOrder(node) {
            if (node) {
                postOrder(node.left)
                postOrder(node.right)
                console.log(node.key)
            }
        }
    }

    //层序遍历
    this.levelOrder = function () {
        console.assert(root, '二叉树为空')
        //存储层序遍历的数据
        let arr = []
        //通过一个数组来实现队列，该队列存放需要遍历的节点
        let queue = [root]
        while (queue[0]) {
            let node = queue[0]
            arr.push(node.key)
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
        console.assert(root, '二叉树为空')
        return _searchMin(root).key
    }
    //返回node为根节点的二叉树中最小键值的节点
    function _searchMin(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }
    //查找最大键值
    this.maxKey = function () {
        console.assert(root, '二叉树为空')
        return _searchMax(root).key
    }
    //返回node为根节点的二叉树中最大键值的节点
    function _searchMax(node) {
        while (node.right) {
            node = node.right
        }
        return node
    }
    //删除最小键值,最小键值没有右节点时直接删除，有右节点时，用右子树代替最小键值节点
    this.removeMin = function () {
        console.assert(root, '二叉树为空')
        _removeMin(root)

    }
    //删除node为根节点的二叉树中最小键值节点
    function _removeMin(node) {
        if (node.left === null) {
            node = node.right
            return node
        }
        node.left = _removeMin(node.left)
        return node
    }

//删除最大键值，最大键值没有左节点时直接删除，有左节点时，用左子树代替最大键值节点
this.removeMax = function (node) {
    console.assert(root, '二叉树为空')
    _removeMax(root)
}
//删除node为根节点的二叉树中最大键值节点
function _removeMax(node) {
    if (node.right === null) {
        node = node.left
        return node
    }
    node.right = _removeMax(node.right)
    return node
}
//删除键值为key的节点
this.remove = function (key) {
    console.assert(root, '二叉树为空')
    _remove(root, key)
}
//删除node为根节点的二叉树中键值为key的节点
function _remove(node, key) {
    if (key < node.key) {
        node.left = _remove(node.left, key)
        return node
    }
    if (key > node.key) {
        node.right = _remove(node.right, key)
        return node
    }
    if (key === node.key) {
        //没有子节点时，直接删除该节点
        if (!node.left && !node.right) {
            node = null
        }
        //只有一个子节点时
        if (node.left === null || node.right === null) {
            node = node.left || node.right
        }
        //有两个子节点时
        if (node.left && node.right) {
            //找出右子树中的最小键值节点
            let min = _searchMin(node.right)
            node.key = min.key
            node.value = min.value
            //删除右子树中的最小键值节点
            node.right=_removeMin(node.right)
        }
        return node


    }
}


}

module.exports = { BinarySearchTree }