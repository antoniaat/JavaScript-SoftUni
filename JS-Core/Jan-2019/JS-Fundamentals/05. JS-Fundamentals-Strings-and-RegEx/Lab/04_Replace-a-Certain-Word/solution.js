function solve() {
    let arr = JSON.parse(document.getElementById("arr").value);
    let word = document.getElementById("str").value;
    let result = document.getElementById('result');

    function replaceCertainWord(arr, word) {
        let wordToReplace = arr[0].split(' ').filter(a => a !== '')[2];
        let regex = new RegExp(wordToReplace, 'gi');

        for (let sentence of arr) {
            sentence = sentence.replace(regex, word);
            let p = document.createElement('p');
            p.innerHTML = sentence;
            result.appendChild(p);
        }
    }

    replaceCertainWord(arr, word);
}