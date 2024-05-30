// store/store.js
import { createStore } from "vuex";
import users from "./modules/users";

const store = createStore({
  modules: {
    users: users,
  },
});

export default store;
