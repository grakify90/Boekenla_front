export default {
    addBook: (state, payload) => {
        const {
            books,
            book
        } = payload
        state[books].push(book);
    },
};