function square_star(side_size) {

    for (var j = 0; j < side_size; j++) {
        var starline = '';
        for (var i = 0; i < side_size; i++) {
            starline += 'x'
        }
        console.log(starline);
    }
}

square_star(7);