function right_hol_tri(n) {
    string = '';
    for (var m = 0; m < n + 1; m++) {
        string += ' '
    }
    string += '*\n';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n + 1 - i; j++) {
            string += ' ';
        }
        string += '*';
        for (let k = 0; k < i - 1; k++) {
            string += ' ';
        }
        string += '*\n';
    }

    for (let l = 0; l < n + 2; l++) {
        string += '*';
    }
    return string;
}
console.log(right_hol_tri(5))