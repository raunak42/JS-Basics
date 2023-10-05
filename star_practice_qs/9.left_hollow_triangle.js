function left_hol_tri(n) {
    string = '*\n';
    for (var i = 1; i <= n; i++) {
        string += '*';
        for (var j = 0; j < i - 1; j++) {
            string += ' ';
        }
        string += '*\n';
    }
    for (var l = 0; l < n + 2; l++) {
        string += '*';
    }
    return string;
}

console.log(left_hol_tri(8))