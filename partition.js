class Node {

	constructor(val) {
		this.next = null
		this.val = val
	}
}

class SLL {
	constructor() {
		this.head = null;
	}
	
	add(val) {
		const newNode = new Node(val);
		
		if(!this.head) {
			this.head = newNode;
			return this;
		}

		let runner = this.head;
		while(runner.next) runner = runner.next;
		runner.next = newNode;

		return this;
	}

	printList() {
		let arr = [], runner = this.head;
		while(runner) {
			arr.push(runner.val);
			runner = runner.next;
		}
		console.log(arr);
	}

	partition(val) {
		let runner = this.head, flag = false;
		while(runner) {
			if(runner.val === val) {
				flag = true;
				break;
			}
			runner = runner.next;
		}

		if(!flag) return;

		const swapPoint = runner;
		runner = this.head;
		let pre = runner, post = runner;
		this.head = pre

		while(runner) {
			if(runner !== swapPoint) {
				if(runner.val >= val) {
					post.next = runner;
					post = post.next;
				}
				else {
					let temp = pre
					pre = runner;
					pre.next = temp;
					pre = pre.next;
				}
			}

			runner = runner.next;
		}
		return this
	}
}

let list = new SLL().add(5).add(3).add(2).add(1).add(7)
list.printList();

list.partition(3).printList();

