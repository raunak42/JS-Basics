function fibonacci(start_index, end_index) {
    var n1 = 0;
    var n2 = 1;
    var n;
    for (var i = start_index; i <= end_index; i++) {
        n = n2 + n1;
        n1 = n2;
        n2 = n;
    }
    return n1;
}

const first_num=0;
console.log(first_num);

for (var i = 0; i <= 10; i++) {
    console.log(fibonacci(0, i));
}
