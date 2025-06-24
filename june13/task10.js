const scores = {
    math: 85,
    science: 91,
    enghish: 92,
    history: 88
}

const entries = Object.entries(scores);

const filteredEntries = entries.filter(([subject, score]) => score >= 90);

const filteredScores = Object.fromEntries(filteredEntries);

console.log(filteredScores);