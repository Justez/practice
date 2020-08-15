class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an value at the end of list 
    add(value) {
        var node = new Node(value);
        var current;// to store current node 
        if (this.head == null)// if list is Empty add the value and make it head 
            this.head = node;
        else {
            current = this.head;
            while (current.next) {// iterate to the end of the list 
                current = current.next;
            }
            current.next = node;// add node 
        }
        this.size++;
    }

    printList() {// prints the list items 
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

function setLinkedList(count) {
    var ll = new LinkedList();
    for (i = 1; i <= count; i++) {
        ll.add(i);
    }
    ll.printList()
    return ll
}

function findMiddle(count) {
    const list = setLinkedList(count);
    let length = 0;
    let current = list.head;
    let middle = list.head;
    while (current.next !== null) {
        length++
        if(!(length%2)) middle = middle.next;
        current = current.next
    }
    if (length%2) middle = middle.next;
    return middle.value
}

function test() {
    console.log(findMiddle(5))
    console.log(findMiddle(10))
}

test();