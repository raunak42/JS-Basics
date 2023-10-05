var counter=1;
var counter2=0;
var string='';
function printcounter(){
    //console.clear();
    console.log(counter);
    counter+=1;
    
}

function starline(){
    for(var i=0; i<4; i++){
        string+='*';
    }
    console.log(string);
}

setTimeout(printcounter, 7000);


for(var i=1; i<=3; i++){
    counter2+=i;
    
}
console.log(counter2);
console.log('fuckme');
setTimeout(starline, 8000)
console.log('fuu');
counter+=21;
console.log(counter)

