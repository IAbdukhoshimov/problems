function filter(array) {
    return array.filter((item) => {
        if (item % 2 == 0) {
            return true;
        }
        return false;
    });
}

console.log(filter([1, 2, 3, 4, 5]));
