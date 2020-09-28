export default {
    addBook: (state, payload) => {
        const {
            books,
            book
        } = payload
        state[books].push(book);
    },
    searchThroughBooks: (state, payload) => {
        const {
            text,
            genre
        } = payload;
        const searchTextArray = text.split(" ")
        console.log(searchTextArray)
        const filteredBooks = state.books.filter(book => {
            let combinedStrings = book.title.concat(" ", book.author).toLowerCase()
            console.log(combinedStrings)
            return combinedStrings.includes(text)
        }).filter(book => {
            return book.genre.find(genreItem => {
                if (genre) {
                    return genreItem === genre
                } else {
                    return book
                }
            })
        })

        state.filteredBooks = filteredBooks
    }
};