function pyramid(n){
    
    for (var i=1; i<=n; i++){
        var string1="";
        var string2="x";
        for(var j=1; j<=n-1; j++){
            string1+=' ';
        }

        for(var k=1; k< 2 * i - 1; k++){
            string2+='x';
        }

        console.log(string1+string2);
}
}

pyramid(5);
