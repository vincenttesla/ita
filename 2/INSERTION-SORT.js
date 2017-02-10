function insertionSort(A){
	for (var j=2;j<A.length;j++){

		var key = A[j];
		var i = j - 1;
		while(i > 0 && A[i] > key){
			A[i+1] = A[i];
			i--;
		}
		A[i+1] = key;
	}
}