function calendar(arr) {
    let date = new Date(arr[2], arr[1], arr[0]); // (year, month, day)

    createTable();

    function createTable() {
        let caption = getMonthName(date.getMonth()) + ' ' + +arr[2];

        let table = $(`<table>`)
            .append($(`<caption>${caption}</caption>`))
            .append(`<tbody><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></tbody>`);
        $('#content').append(table);

        let daysCount = daysInMonth(+arr[1], +arr[2]);
        let currentDate = arr[0];
        let firstDayInaMonth = new Date(arr[2] + "-" + arr[1] + "-01").getDay(); // 6 - Saturday

        console.log(firstDayInaMonth);

        for (let i = 1; i <= daysCount;) {
            let row = $('<tr></tr>');

            if (i === 1 && firstDayInaMonth !== 1) {
                for (let j = 0; j < firstDayInaMonth; j++) {
                    row.append($(`<td></td>`));
                }

                for (let j = firstDayInaMonth; j < 7; j++) {
                    if (i === currentDate) {
                        row.append($(`<td class="today">${i}</td>`));
                    } else {
                        row.append($(`<td>${i}</td>`));
                    }
                    i++;
                }
            } else {
                for (let j = 1; j <= 7; j++) {
                    if (i > daysCount) {
                        row.append($(`<td></td>`));
                    } else if (i === currentDate) {
                        row.append($(`<td class="today">${i}</td>`));
                    } else {
                        row.append($(`<td>${i}</td>`));
                    }
                    i++;
                }
            }

            $('table tbody').append(row);
        }
    }

    function getMonthName(monthNum) {
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return month[--monthNum]; // Month array starts from 0
    }

    function daysInMonth(month, year) {
        // Month here is 1-indexed (January is 1, February is 2, etc). This is
        // because we're using 0 as the day so that it returns the last day
        // of the last month, so you have to add 1 to the month number
        // so it returns the correct amount of days
        return new Date(year, month, 0).getDate();
    }
}

