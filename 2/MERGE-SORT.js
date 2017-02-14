function mergeSort(A,p,r){
	if(p<r){
		q = (p+r)/2;
		mergeSort(A,p,q);
		mergeSort(A,q+1,r);
		merge(A,p,q,r);
	}
}

function merge(A,p,q,r){
	var n1 = q - p + 1;
	var n2 = r - q;
	var L = new Array(n1+1);
	var R = new Array(n2+1);
	for(var i = 0;i < n1;i++){
		L[i] = A[p+i];
	}
	for(var j = 0;j < n2;j++){
		R[j] = A[q+1+j];
	}
	L[n1] = Number.MAX_VALUE;
	R[n2] = Number.MAX_VALUE;
	var i = j = 1;
	for(var k = p;k <= r;k++){
		if (L[i]<=R[i]) {
			A[k] = L[i];
			i++;
		}else{
			A[k] = R[j];
			j++;
		}
	}
}
function MERGE_SORT(A){
	mergeSort(A,0,A.Length-1);
}