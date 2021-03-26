function map(array) {
    return array.map((item) => {
        return {
            id: item
        };
    });
}

console.log(map([1, 2, 3, 4, 5]));
