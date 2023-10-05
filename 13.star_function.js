function star(num_of_rows) {
    for (var i = 0; i < num_of_rows; i++) {
        var string = '';
        for (j = 0; j < i + 1; j++) {
            string = string + 'x'
        }
        console.log(string);
    }

}

star(7); 