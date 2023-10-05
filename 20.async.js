function printToScreen(){
    console.log('hello world');
}

setTimeout(printToScreen, 1*1000);

let counter=0;
for(let i=0; i<10000000000; i++){
    counter+=1;
}
console.log(counter);