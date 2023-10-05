function right_tri(n){
    var string=''
    for(var i=1; i<=n; i++){
        for(var j=0; j<n-i; j++){
           string=string+' ';
        }

        for(var k=0; k<i; k++){
           string=string+'x';
        }
        string=string+'\n';
    }
    console.log(string);
}

right_tri(10);
