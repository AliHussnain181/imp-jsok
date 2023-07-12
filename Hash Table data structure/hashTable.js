// Define a class for the hash table
class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    // Hash function to convert a key to an index in the table
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash << 5) + hash + key.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer
            hash = Math.abs(hash); // Make sure the hash is positive
        }
        return hash % this.size;
    }

    // Method to insert a key-value pair into the table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }

    // Method to remove a key-value pair from the table
    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }

    // Method to retrieve a value from the table based on its key
    retrieve(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return null;
    }

    // Method to get all the key-value pairs as an array
    getAll() {
        const result = [];
        for (let i = 0; i < this.size; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    result.push(this.table[i][j]);
                }
            }
        }
        return result;
    }
}

// Create a new instance of the hash table with a size of 10
const hashTable = new HashTable(10);

// Function to insert a key-value pair into the table
function insert() {
    const key = document.getElementById("key").value;
    const value = document.getElementById("value").value;
    if (key && value) {
        hashTable.insert(key, value);
        updateTable();
    }
}

// Function to remove a key-value pair from the table
function remove() {
    const key = document.getElementById("key").value;
    if (key) {
        const success = hashTable.remove(key);
        if (success) {
            updateTable();
        } else {
            alert("Key not found");
        }
    }
}

// Function to retrieve a value from the table based on its key
function retrieve() {
    const key = document.getElementById("key").value;
    if (key) {
        const value = hashTable.retrieve(key);
        if (value !== null) {
            document.getElementById("value").value = value;
        } else {
            alert("Key not found");
        }
    }
}

// Function to update the table with the contents of the hash table
function updateTable() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    const entries = hashTable.getAll();
    for (let i = 0; i < entries.length; i++) {
        const tr = document.createElement("tr");
        const tdKey = document.createElement("td");
        const tdValue = document.createElement("td");
        tdKey.textContent = entries[i][0];
        tdValue.textContent = entries[i][1];
        tr.appendChild(tdKey);
        tr.appendChild(tdValue);
        tbody.appendChild(tr);
    }
}

// Call the updateTable function to initially populate the table
updateTable();  