function pyramid(n){
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
return string;
//console.log(string);
}

console.log(pyramid(4));