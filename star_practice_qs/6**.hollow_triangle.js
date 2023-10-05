function starline(n){
    var string1='';
for(var i=0; i<n+2; i++){
string1+='*'
}
console.log(string1);
}



function pyramid(n){ 
    let string = "";
    for (let i = 1; i <= n; i++) {
    
            string += "*";
        
    
        for (let k = 0; k<i; k++) {
            string += " ";
        }
        string += "*\n";
    }
    console.log(string);
    starline(n);
    }
    
    pyramid(4);
    
    