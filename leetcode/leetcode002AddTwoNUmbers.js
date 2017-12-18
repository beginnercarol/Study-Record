
(function(){
	function ListNode(val){
		this.val = val;
		this.next = null;
	}
	var l1 = createListFromArr([1,2,3]);
	var l2 = createListFromArr([3,2,1,5]);
	console.log(addTwoNumbers(l1,l2));
	function addTwoNumbers(l1,l2){
		var p=l1,q=l2;
		var li = new ListNode(null);
		var head = li;
		while(p!=null && q!=null){
			li.next = new ListNode(p.val+q.val);
			console.log(li);
			li = li.next;
			p=p.next;
			q=q.next;
		}
		p==null?(q==null?null:li.next=q):(li.next=p);
		console.log(li);
		return head.next;
	}
	//根据 array 生成 一个单向链表
	function createListFromArr(arr){
		var head = new ListNode(null);
		var p =head;
		arr.forEach((val)=>{
			p.next = new ListNode(val);
			p=p.next;
		});
		return head.next;
	}
})()