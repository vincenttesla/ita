//test2.2-2 SELECTION-SORT
function selectionSort(A){
	for (var i = 0; i < A.length; i++) {
		var min = i;
		for (var j = i+1; j < A.length; j++) {
			if (A[j] < A[min]) {
				min = j;
			}
		}
		var tmp = A[i];
		A[i] = A[min];
		A[min] = tmp;
	}
}