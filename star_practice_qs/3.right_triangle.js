function right_tri(n) {
    var string = '';
    for (var k = 1; k <= n; k++) {
        for (var i = 0; i < n - k; i++) {
            string += ' ';
        }

        for (var j = 0; j < k; j++) {
            string += 'x'
        }
        string += '\n';

    }
    console.log(string);
}

right_tri(7);