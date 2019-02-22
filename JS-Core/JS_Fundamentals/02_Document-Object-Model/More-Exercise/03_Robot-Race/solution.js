function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', commandExecutioner);
    let winner = 1;

    function commandExecutioner() {
        let inputs = document.getElementsByTagName('input');
        let robotInput = inputs[0];
        let message = document.getElementsByTagName('span')[0];

        let cmd = inputs[1];
        let tokens = cmd.value.split(' ');

        move(robotInput.value, tokens);

        function move(name, dirTokens) {
            let robotName = document.getElementById(`${name.toLowerCase()}`);
            let position = dirTokens[0];
            let percents = Number(dirTokens[1]);

            if (position.toLowerCase() === 'forward') {
                let marginCalculations = percents + Number(robotName.style.marginLeft.slice(0, 2));

                if (marginCalculations < 80) {
                    robotName.style.marginLeft = `${marginCalculations}%`;
                    message.textContent = `${name} move ${percents} forward`;
                } else if (marginCalculations === 80) {
                    robotName.style.marginLeft = `${marginCalculations}%`;
                    winner === 1 ? message.textContent = `${name.toUpperCase()} WIN THE RACE!` : message.textContent = `${name.toUpperCase()} FINISHED ${winner}`;
                    winner += 1;
                } else {
                    message.textContent = `${name} cant move so forward`;
                }

            } else if (position.toLowerCase() === 'backward') {
                let marginCalculations = Number(robotName.style.marginLeft.slice(0, 2));
                let calculatedMargin = marginCalculations - percents;

                if (marginCalculations < 80 && calculatedMargin >= 0) {
                    robotName.style.marginLeft = `${marginCalculations}%`;
                    message.textContent = `${name} was distracted and he got behind with ${percents} meters`;
                } else {
                    message.textContent = `${name} can't move so backward`;
                }
            }
        }

        robotInput.value = "";
        cmd.value = "";
    }
}