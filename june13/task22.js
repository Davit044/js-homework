const container = {
    book: {
        title: "the great gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    movie: {
        title: "inception",
        director: "Christopher Nolan",
        year: 2010
    },
    subscribers: 560
}

const container2 = Object.assign(container);

container2.book.title = "THE GREAT GATSBY";
container2.movie.title = "INCEPTION";
container2.subscribers = 600;

console.log(container);