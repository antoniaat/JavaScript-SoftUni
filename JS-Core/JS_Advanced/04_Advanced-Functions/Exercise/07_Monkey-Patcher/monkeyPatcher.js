function solution(command) {

    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    } else if (command === 'score') {
        let result = [];

        let biggerVote = Math.max(this.upvotes, this.downvotes);
        let percentage = Math.ceil(biggerVote / 4);
        let balance = this.upvotes - this.downvotes;

        let positiveRatingPercentage = (this.upvotes / (this.upvotes + this.downvotes)) * 100;

        let rating = '';

        if (positiveRatingPercentage >= 66) {
            rating = 'hot';
        } else if (balance >= 0 && this.upvotes + this.downvotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new'
        }

        if (this.upvotes + this.downvotes > 50) {
            result.push(this.upvotes + percentage, this.downvotes + percentage, balance, rating);
        } else {
            result.push(this.upvotes, this.downvotes, balance, rating);
        }

        return result;
    }

}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0
};

solution.call(post, 'upvote');
// solution.call(post, 'downvote');
let score = solution.call(post, 'score');
console.log(score);
//
// solution.call(post, 'downvote');
// console.log(score = solution.call(post, 'score'));
