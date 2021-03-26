function odd_even(n) {
    let first = 0;
    let second = 0;

    let i = 0;
    while (n > 0) {
        if (i % 2 == 0) {
            first += n % 10;
        } else {
            second += n % 10;
        }

        n /= 10;
        n = Math.floor(n);
        i++;
    }

    if (i % 2 == 0) {
        return [first, second];
    }
    return [second, first];
}

console.log(odd_even(456));
