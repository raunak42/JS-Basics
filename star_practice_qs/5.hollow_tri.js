function holl_tri(n){
    var string='*';
    for(var i=0; i<n; i++){

        for(var j=0; j<i; j++){
            string+='*'
        }
        console.log(string)
    }
    
}

holl_tri(7);