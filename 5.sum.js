function sum_all(startIndex, endIndex) {




    var sum = 0;
    for (var i = startIndex; i <= endIndex; i++) {
        sum += i;
    }
    return sum
}



console.log(sum_all(1, 50));
console.log(sum_all(1, 10000000000));
console.log(sum_all(1, 10000000000));
console.log(sum_all(1, 34));
