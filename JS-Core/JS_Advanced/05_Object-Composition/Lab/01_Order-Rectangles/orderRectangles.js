function orderRectangles(arr) {
    let rectangles = [];

    for (let i = 0; i < arr.length; i++) {
        let currentRectangle = arr[i];

        let rectangle = {
            width: +currentRectangle[0],
            height: +currentRectangle[1],
            area: function () {
                return this.width * this.height;
            },
            compareTo: (other) => {
                if (this < other) {
                    return -1;
                } else if (this === other) {
                    return 0;
                } else {
                    return 1;
                }
            }
        };

        rectangles.push(rectangle);
    }

    function firstCriteria(a, b) {
        if (a.area() > b.area()) {
            return -1;
        } else if (a.area() < b.area()) {
            return 1;
        } else {
            // sort by second criteria
            if (a.width > b.width) {
                return -1;
            } else if (a.width < b.width) {
                return 1;
            }
        }
    }

    return rectangles.sort(firstCriteria);
}

let test0 = [[10, 5], [5, 12]];
let test1 = [[10, 5], [3, 20], [5, 12]];
console.log(orderRectangles(test0));