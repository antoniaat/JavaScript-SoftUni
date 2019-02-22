function solve() {
    let inputArray = JSON.parse(document.getElementById("arr").value);
    let divResult = $('#result')

    function shelfFunction(inputArray) {
        let shelfs = new Map();
        for (let string of inputArray) {
            if (string.includes('->')) {
                let tokens = string.split(' -> ');
                let id = tokens[0];
                let genre = tokens[1];
                if ([...shelfs].filter(x => x[0].id === id).length === 0) {
                    shelfs.set({
                        id: id,
                        genre: genre
                    }, []);
                }
            } else {
                let tokens = string.split(': ');
                let title = tokens[0];
                let authorAndGenre = tokens[1].split(', ');
                let author = authorAndGenre[0];
                let genre = authorAndGenre[1];
                if ([...shelfs].filter(x => x[0].genre === genre).length > 0) {
                    let shelf = getShelf(genre);
                    let books = shelfs.get(shelf);
                    books.push({
                        title: title,
                        author: author
                    });
                    shelfs.set(shelf, books);
                }
            }
        }

        let sorted = [...shelfs].sort((a, b) => b[1].length - a[1].length);


        for (let [key, value] of sorted) {
            let p1 = $('<p>');
            divResult.append(p1.text(`${key.id} ${key.genre}: ${value.length}`));
            let sortedValue = value.sort((a, b) => a.title.localeCompare(b.title));
            for (let book of sortedValue) {
                let p = $('<p>');
                divResult.append(p.text(`--> ${book.title}: ${book.author}`));

            }
        }

        function getShelf(genre) {
            for (let [key, ] of shelfs) {
                if (key.genre === genre) {
                    return key;
                }
            }
        }
    }
    shelfFunction(inputArray);
}