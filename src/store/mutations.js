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

        const filteredBooks = state.books.filter(book => {
            if (searchTextArray[0]) {
                let combinedStrings = book.title.concat(" ", book.author).toLowerCase()
                let combinedStringsArray = combinedStrings.split(" ")
                let numOfHits = 0
                for (let i = 0; i < searchTextArray.length; i++) {
                    for (let j = 0; j < combinedStringsArray.length; j++) {
                        if (combinedStringsArray[j] === searchTextArray[i]) {
                            numOfHits = numOfHits + 1
                            j = combinedStringsArray.length
                        }
                    }
                }
                return numOfHits === searchTextArray.length
            } else {
                return book
            }

        }).filter(book => {
            return book.genre.find(genreItem => {
                if (genre && genre !== "all genres") {
                    return genreItem === genre
                } else {
                    return book
                }
            })
        })


        state.filteredBooks = filteredBooks
    }
};