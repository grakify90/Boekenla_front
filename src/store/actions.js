export default {
    appendBook: ({
        commit
    }, payload) => {
        commit("addBook", payload);
    },
};