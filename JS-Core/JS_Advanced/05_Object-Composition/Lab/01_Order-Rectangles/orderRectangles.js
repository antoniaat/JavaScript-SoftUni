function order(data){
    let rects=[];
    for (let [width, height] of data) {
        let rect = comperator(width, height);
        rects.push(rect);
    }
    rects.sort((a,b) => a.compareTo(b));
    return rects;

    function comperator(w,h) {
        let rect = {
            width: w,
            height: h,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (
                    other.width - rect.width
                );
            }
        };
        return rect;
    }
}

let test0 = [[10, 5], [5, 12]];
let test1 = [[10, 5], [3, 20], [5, 12]];
console.log(order(test0));