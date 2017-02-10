//test 2.1-3 search problem
function searchOne(A,v){
	for (var i = A.length - 1; i >= 0; i--) {
		if(A[i] == v)
			return i;
	}
	return null;
}