function removeDuplicate(array) {
    uniqueArray = array.filter(function (item, pos) {
        return array.indexOf(item) == pos;
    });

    return uniqueArray;
}

let myarray = [1, 5, 54, 1541, 21, 14, 24, 1];
console.log(removeDuplicate(myarray));
