//works like selectors in Redux
export default {
    booksCount: (state) => {
        return state.books.length
    },
};