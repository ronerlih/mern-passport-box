import axios from "axios";

export default {
  loginUser: function (user) {
    return axios.post("/api/user/login", user)
  },
  signup: function (user) {
    return axios.post("/api/user/signup", user)
  },
  authenticateUser: function () {
    return axios.post("/api/user/authenticate/")
  }

};