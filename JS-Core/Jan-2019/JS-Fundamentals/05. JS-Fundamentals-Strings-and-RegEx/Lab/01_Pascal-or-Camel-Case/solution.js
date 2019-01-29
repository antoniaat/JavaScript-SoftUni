function solve() {
  let input = document.getElementById("str1").value;
  let currentCase = document.getElementById("str2").value;

  function pascalOrCamelCase(input, currentCase) {

    let split = input.toLowerCase().split(' ').filter(a => a !== '');

    let output = "";

    if (currentCase === "Pascal Case") {
      for (let word of split) {
        if (word[0] !== word[0].toUpperCase()) {
          word = word.replace(word[0], word[0].toUpperCase())
        }
        output += word;
      }
    } else if (currentCase === "Camel Case") {
      for (let word of split) {
        if (word[0] !== word[0].toUpperCase()) {
          word = word.replace(word[0], word[0].toUpperCase())
        }
        output += word;
      }
      output = output.replace(output[0], output[0].toLowerCase());
    } else {
      output = "Error!";
    }

    document.getElementById("result").innerHTML = output;
  }
  pascalOrCamelCase(input, currentCase);

}