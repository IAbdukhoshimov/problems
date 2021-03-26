function fib(n) {
    let result = 0;
    let first = 0;
    let second = 1;

    for (let i = 0; i < n; i++) {
        result = first + second;
        first = second;
        second = result;
    }

    return result;
}
console.log(fib(10));
