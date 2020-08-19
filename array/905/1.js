var sortArrayByParity = function(A) {
    var B = new Array();
    for(let i = 0 ; i < A.length ; i++){
        if( A[i] % 2 == 0 ){
            B.unshift(A[i]);
        }else{
            B.push(A[i]);
        }
    }
    return B
};

