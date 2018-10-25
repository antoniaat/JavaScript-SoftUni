function solve(commands) {
    let processor = (function () {
        let text = '';

        return function processor(commandString) {
            let commandTokens = commandString.split(' ');
            switch (commandTokens[0]) {
                case 'append':
                    text += commandTokens[1];
                    break;
                case 'print':
                    console.log(text);
                    break;
                case 'removeStart':
                    text = text.slice(+commandTokens[1]);
                    break;
                case 'removeEnd':
                    text = text.substring(0, text.length - +commandTokens[1]);
                    break;
            }
        }
    })();

    for (let command of commands) {
        processor(command);
    }
}

let test0 = ['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'];

let test1 = ['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print'];

solve(test0);