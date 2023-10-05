function rev_pyramid(n){
    var string='';
    for(var i=0; i<n; i++){
        for(var j=0; j<i; j++){
            string+=' ';
        }

        for(var k=0; k<2*(n-i)-1; k++){
            string+='*';
        }
        string+='\n'
    }
    console.log(string);
}

rev_pyramid(10);


