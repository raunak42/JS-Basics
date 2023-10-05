function d_tri(n) {
    for (var j = 0; j < n; j++) {
        var string = '';

        for (var i = 0; i < n - j; i++) {
            string += '*';
        }
        console.log(string);
    } 
}

d_tri(7);