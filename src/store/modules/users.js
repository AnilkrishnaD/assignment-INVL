import axios from "axios";

export default {
  namespaced: true,
  state: {
    users: [],
    filteredUsers: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (response.status === 200) {
          console.log(response.data);
          commit("SET_USERS", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error; // Rethrow the error to handle it outside the action if needed
      }
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
  },
};
