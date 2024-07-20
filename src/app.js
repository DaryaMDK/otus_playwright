const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
}

function getScore(scores) {
    let totalScore = 0;
    for (let key in scores) {
        totalScore += scores[key];
    }
    return totalScore;
}


console.log(getScore(scores)); 