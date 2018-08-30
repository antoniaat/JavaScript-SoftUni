// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.

function isPalindrome(input) {
    let reversed = input.split("").reverse().join("");
    return input == reversed;
}

console.log(isPalindrome('madam'));