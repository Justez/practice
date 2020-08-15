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

function deleteEveryKth(LList, k) {
    let curr = LList.head
    var newLL = new LinkedList();
    let count = 1;
    while (curr) {
        (count % k) && newLL.add(curr.value)
        curr = curr.next
        count++;
    }
    newLL.printList()
}

const LL = setLinkedList([1, 2, 3, 4, 5, 6, 7, 8])
deleteEveryKth(LL, 3)