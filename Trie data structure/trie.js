class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    }

    remove(word) {
        let node = this.root;
        const stack = [];
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                return;
            }
            stack.push([node, char]);
            node = node.children.get(char);
        }
        if (!node.isEndOfWord) {
            return;
        }
        node.isEndOfWord = false;
        if (node.children.size === 0) {
            for (let i = stack.length - 1; i >= 0; i--) {
                const [parent, char] = stack[i];
                parent.children.delete(char);
                if (parent.children.size !== 0 || parent.isEndOfWord) {
                    break;
                }
            }
        }
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    }

    traverse(node, prefix, ul) {
        if (node.isEndOfWord) {
            const li = document.createElement("li");
            li.textContent = prefix;
            ul.appendChild(li);
        }
        for (const [char, child] of node.children) {
            this.traverse(child, prefix + char, ul);
        }
    }

    display() {
        const trieDiv = document.getElementById("trie");
        trieDiv.innerHTML = "";
        const ul = document.createElement("ul");
        this.traverse(this.root, "", ul);
        trieDiv.appendChild(ul);
    }
}

const trie = new Trie();

function insert() {
    const wordInput = document.getElementById("word");
    const word = wordInput.value.trim();
    if (word !== "") {
        trie.insert(word);
        trie.display();
        wordInput.value = "";
    }
}

function remove() {
    const wordInput = document.getElementById("word");
    const word = wordInput.value.trim();
    if (word !== "") {
        trie.remove(word);
        trie.display();
        wordInput.value = "";
    }
}

function search() {
    const wordInput = document.getElementById("word");
    const word = wordInput.value.trim();
    if (word !== "") {
        const result = trie.search(word);
        alert(result ? "Found" : "Not found");
        wordInput.value = "";
    }
}

window.addEventListener("load", function () {
    trie.display();
});
