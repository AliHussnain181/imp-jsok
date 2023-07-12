class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        return node ? node.height : 0;
    }

    balanceFactor(node) {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }

    rotateLeft(node) {
        const newRoot = node.right;
        const newRight = newRoot.left;
        newRoot.left = node;
        node.right = newRight;
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
        newRoot.height = Math.max(this.height(newRoot.left), this.height(newRoot.right)) + 1;
        return newRoot;
    }

    rotateRight(node) {
        const newRoot = node.left;
        const newLeft = newRoot.right;
        newRoot.right = node;
        node.left = newLeft;
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
        newRoot.height = Math.max(this.height(newRoot.left), this.height(newRoot.right)) + 1;
        return newRoot;
    }

    rebalance(node) {
        const balanceFactor = this.balanceFactor(node);
        if (balanceFactor > 1) {
            if (this.balanceFactor(node.left) < 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }
        if (balanceFactor < -1) {
            if (this.balanceFactor(node.right) > 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }
        return node;
    }

    insert(key, value) {
        const newNode = new Node(key, value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (key === current.key) {
                current.value = value;
                break;
            }
            if (key < current.key) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current.left = this.insertNode(current.left, newNode);
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current.right = this.insertNode(current.right, newNode);
            }
        }
        this.root = this.rebalance(current);
    }

    remove(key) {
        this.root = this.removeNode(this.root, key);
    }

    removeNode(node, key) {
        if (!node) {
            return null;
        }
        if (key === node.key) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            const successor = this.minNode(node.right);
            node.key = successor.key;
            node.value = successor.value;
            node.right = this.removeNode(node.right, successor.key);
        } else if (key < node.key) {
            node.left = this.removeNode(node.left, key);
        } else {
            node.right = this.removeNode(node.right, key);
        }
        node.height = Math.max(this.height(node.left), this.height(node.right)) + 1;
        return this.rebalance(node);
    }

    minNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    find(key) {
        let current = this.root;
        while (current) {
            if (key === current.key) {
                return current.value;
            }
            if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    inOrderTraversal(callback) {
        this.inOrderTraversalNode(this.root, callback);
    }

    inOrderTraversalNode(node, callback) {
        if (node) {
            this.inOrderTraversalNode(node.left, callback);
            callback(node.key, node.value);
            this.inOrderTraversalNode(node.right, callback);
        }
    }
}

function insert() {
    const keyInput = document.getElementById('key-input');
    const valueInput = document.getElementById('value-input');
    const key = keyInput.value;
    const value = valueInput.value;
    keyInput.value = '';
    valueInput.value = '';
    tree.insert(key, value);
    renderTree();
}

function remove() {
    const keyInput = document.getElementById('key-input');
    const key = keyInput.value;
    keyInput.value = '';
    tree.remove(key);
    renderTree();
}

function renderTree() {
    const treeDiv = document.getElementById('tree');
    treeDiv.innerHTML = '';
    tree.inOrderTraversal((key, value) => {
        const nodeDiv = document.createElement('div');
        nodeDiv.innerText = `${ key }: ${ value }`;
        treeDiv.appendChild(nodeDiv);
    });
}

const tree = new AVLTree();
renderTree();


