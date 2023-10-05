function starline(n){
    var string = ' ';
for(var i=1; i<=n; i++){
    string= string+ 'x';
}
    console.log(string)
}

function pattern(n){
    for(var i=1; i<=n; i++){
        starline(i);
    }
}

pattern(7);

