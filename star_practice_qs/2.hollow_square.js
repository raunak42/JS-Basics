function starline(n){
    var string1='';
for(var i=0; i<n+2; i++){
string1+='x'
}
console.log(string1);
}

function hollow_square(n){

    

    starline(n);
for (var j = 0; j < n; j++) {
    var string = 'x'
    for (var i = 0; i < n; i++) {
        string += ' ';
    }
    string += 'x'
    console.log(string);
}
    starline(n);
}

hollow_square(7);