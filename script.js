function Calculator(operator, allianceNumber) {
    var currentELO = parseFloat(document.getElementById('elo' + allianceNumber).value);

    var opponentELO = parseFloat(document.getElementById('elo' + (allianceNumber === 1 ? 2 : 1)).value);

    if (isNaN(currentELO) || isNaN(opponentELO)) {
        alert("Please enter valid numeric values for ELO.");
        return;
    }

    var c, result1, d, result2;

    switch (operator) {
        case 'Win':
            c = (10 ** (currentELO / 400)) / ((10 ** (opponentELO / 400)) + (10 ** (currentELO / 400)))
            result1 = currentELO + (50 * (1 - c))
            d = (10 ** (opponentELO / 400)) / ((10 ** (currentELO / 400)) + (10 ** (opponentELO / 400)))
            result2 = opponentELO + (50 * (0 - d))
            break;
    }

    result1 = Math.round(result1 * 1) / 1;
    result2 = Math.round(result2 * 1) / 1;
    var change1 = result1 - currentELO;
    var change2 = result2 - opponentELO;

    var result1Button = document.getElementById('result' + allianceNumber);
    result1Button.className = change1 >= 0 ? 'positive' : 'negative';
    result1Button.value = result1;

    var result2Button = document.getElementById('result' + (allianceNumber === 1 ? 2 : 1));
    result2Button.className = change2 >= 0 ? 'positive' : 'negative';
    result2Button.value = result2;

    var winButton = document.getElementById('win' + allianceNumber);
    var lossButton = document.getElementById('loss' + allianceNumber);

    document.getElementById('win1').classList.remove('selected');
    document.getElementById('win2').classList.remove('selected');

    if (operator === 'Win') {
        winButton.classList.add('selected');
    }
    document.getElementById('change' + allianceNumber).className = change1 >= 0 ? 'positive' : 'negative';
    document.getElementById('change' + allianceNumber).value = change1;
    document.getElementById('change' + (allianceNumber === 1 ? 2 : 1)).className = change2 >= 0 ? 'positive' : 'negative';
    document.getElementById('change' + (allianceNumber === 1 ? 2 : 1)).value = change2;
}
function clearForm() {
    ['elo1', 'elo2', 'change1', 'result1', 'change2', 'result2'].forEach(id => {
        document.getElementById(id).value = '';
        document.getElementById(id).className = '';
    });
    ['win1', 'win2'].forEach(id => {
        document.getElementById(id).classList.remove('selected');
    });
}
