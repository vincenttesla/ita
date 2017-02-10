//test2.1-4 add two binary number
function addTwoBinary(A,B){
	var n = A.length;
	var C[n+1];
	var C[0] = 0;
	for (var i = 0; i < n; i++) {
		if(A[i]+B[i]+c[i] >= 2){
			C[i] += A[i]+B[i] - 2;
			C[i+1] = 1;
		}else{
			C[i] += A[i]+B[i];
		}
	}
}