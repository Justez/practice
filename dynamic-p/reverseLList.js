class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        var node = new Node(value);
        var current; 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

function setLinkedList(values) {
    var ll = new LinkedList();
    for (i of values) {
        ll.add(i);
    }
    ll.printList()
    return ll
}

function reverse(LList) {
    let curr = LList.head
    let tail;
    while (curr) {
        const item = new Node(curr.value)
        item.next = tail;
        tail = item;
        curr = curr.next;
    }
    const reversed = new LinkedList();
    reversed.head = tail;
    reversed.printList();
    return reversed
}

const LL = setLinkedList([2, 7, 8, 9, 10])
reverse(LL)