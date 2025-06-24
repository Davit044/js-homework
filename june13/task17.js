const movie = {
    title: "Virus",
    year: 2008,
    director: "Hiroshi Takahashi",
    rating: 6.9
}

function getRest({ title, year, ...rest }) {
    console.log(title);
    console.log(year);

    return rest;
}

const rest = getRest(movie);
console.log(rest);