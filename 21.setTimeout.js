var counter=1;
var counter2=0;
function printcounter(){
    console.clear();
    console.log(counter);
    counter+=1;
    
}

setInterval(printcounter, 1000);


for(var i=1; i<=10000000; i++){
    counter2+=i;
    
}
console.log(counter2);