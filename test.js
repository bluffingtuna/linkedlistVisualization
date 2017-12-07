var fs = require("fs");

// function LinkedList() {
// 	this.print = function(filename) {
// 		var current = this.root;
// 		var log = function(str) { console.log(str);};
// 		if (filename) {
// 			var file = fs.openSync(filename, 'w');
// 			log = function(str) {fs.write(file, str);}
// 		}

// 		log("digraph BST {");
// 		while (current && current.next) {
// 			log("  " + current.value + " -> " + current.next.value);
// 			current=current.next;
// 		}
// 		if (current) {
// 			log("  " + current.value + " -> null");
// 		}
// 		log(" null [shape=point]");
// 		log("}");
// 	}
// }

function Node(value){
	this.value = value;
	this.next = null;
}

function LinkedList(){
	this.root= null;
	this.addStart= function(value) {
		let node = new Node(value);
		node.next = this.root;
		this.root = node;
	};
	this.addEnd= function(value) {
		let node = new Node(value);
		if (this.root == null){
			return this.root= node;
		};
		let curr = this.root;
		while (curr.next != null){
			curr = curr.next;
		};
		curr.next = node;
	};
	this.addEnd1= function(value) {
		let node = new Node(value);
		let prev = null;
		let current = this.root;

		while (current) {
			prev = current;
			current = current.next;
		}

		if (prev) {
			prev.next = node;
		} else {
			this.root = node;
		}
	};
	this.addAt= function(value, index){
		let node = new Node(value);
		let curr = this.root;
		let prev = null;
		let i = 0
		while (i !== index) {
			prev == curr;
			curr == curr.next;
			i++;
			if (curr===null){
				return false
			};
		}
		node.next = curr;
		if (prev) {
			prev.next = node;
		} else {
			this.root=node;
		}
	};
	this.addAt1= function(value, index){
		let node = new Node(value);
		let prev = null;
		let current = this.root;

		while (current) {
			if (index==0) {
				node.next = current;
				if (prev) {
					prev.next = node;
				} else {
					this.root = node;
				}
				return true;
			}
			prev = current;
			current = current.next;
			index--;
		}
		return false;
	}
	this.print = function(filename) {
		var current = this.root;
		var log = function(str) { console.log(str);};
		if (filename) {
			var file = fs.openSync(filename, 'w');
			log = function(str) {fs.write(file, str);}
		}

		log("digraph BST {");
		while (current && current.next) {
			log("  " + current.value + " -> " + current.next.value);
			current=current.next;
		}
		if (current) {
			log("  " + current.value + " -> null");
		}
		log(" null [shape=point]");
		log("}");
	}

	// this.deleteStart= function() {
		
	// }
	// this.deleteEnd= function() {}
	// this.deleteAt= function(index) {}

	// this.get= function(index) {}

	// this.indexOf= function(value) {}
	// this.print= function(filename) {}
}

var input = [9, 4, 2, 5, 8, 3, 1, 7];
var ll = new LinkedList();
input.forEach(i => ll.addEnd1(i));
ll.addAt(10,2)
ll.print();