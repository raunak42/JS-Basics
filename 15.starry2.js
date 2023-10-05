function star2(n){
   for (var i=0; i<n; i++){
    var string = 'xx'
    for(var j=0; j<i; j++){
        string=string + 'xx';
        }
    console.log(string)
   }
}

star2(5);