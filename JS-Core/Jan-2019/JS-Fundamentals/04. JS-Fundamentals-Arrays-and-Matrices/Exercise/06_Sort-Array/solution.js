function solve(array) {
    array.sort(function (a, b) {
        if (a.length === b.length) {
            var nameA = a;
            var nameB = b;
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }
        return a.length - b.length;
    });
    console.log(array.join("\n"));
}