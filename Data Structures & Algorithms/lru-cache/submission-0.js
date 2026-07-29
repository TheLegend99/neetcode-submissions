class Node {
    constructor(key, val){
        this.key = key,
        this.val = val,
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)){
            const node = this.map.get(key);
            this.moveToFirst(node);
            return node.val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if( this.map.has(key)){
            const node = this.map.get(key);
            node.val = value;
            this.moveToFirst(node);
        } else {
            if (this.map.size === this.capacity){
                const lastNode = this.tail.prev;
                lastNode.prev.next = this.tail;
                this.tail.prev = lastNode.prev;
                this.map.delete(lastNode.key);
            }
            const curNode = new Node(key, value);
            this.map.set(key, curNode);
            curNode.next = this.head.next;
            this.head.next.prev = curNode;
            this.head.next = curNode;
            curNode.prev = this.head;
        }
    }


    moveToFirst(node){
        // remove from current link list
        node.prev.next = node.next;
        node.next.prev = node.prev;
        // move to after head
        this.head.next.prev = node;
        node.next = this.head.next;
        this.head.next = node;
        node.prev = this.head;
    }
}
