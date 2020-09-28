export default {
    appendBook: ({
        commit
    }, payload) => {
        commit("addBook", payload);
    },
    searchBooks: ({
        commit
    }, payload) => {
        commit("searchThroughBooks", payload)
    }
};