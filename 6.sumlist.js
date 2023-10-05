function sum_of_n(start_index, end_index){
    var sum=0;
    for(var i=start_index; i<=end_index; i++){
      sum+=i;
    }
    return sum
}


for(var i=0; i<=10; i++){
var answer = sum_of_n(0,i);
console.log(answer); 
}
