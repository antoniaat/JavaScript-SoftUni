function solve() {
    let args = [];

    function getIfExistsType(type, args) {
        for (const arg of args) {
            if (arg['type'] === type) {
                return arg;
            }
        }
    }

    for (let i = 0; i < arguments.length; i++) {

        if (!getIfExistsType(typeof(arguments[i]), args)) {
            args.push({
                type: typeof(arguments[i]),
                values: 0
            });
        }

        let arg = getIfExistsType(typeof(arguments[i]), args);

        arg.values++;
        console.log(`${arg.type}: ${arguments[i].toString()}`);
    }

    for (const arg of args) {
        console.log(`${arg.type} = ${arg.values}`);
    }

    let sortedTypes = [];

}

solve('cat', 42, function () {console.log('Hello world!');});