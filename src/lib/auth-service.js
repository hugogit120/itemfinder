import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true
    });
  }

  signup(user) {
    const { username, email, password, phone, fullName, avatar } = user;
    return this.auth
      .post("/auth/signup", { username, email, password, phone, fullName, avatar })
      .then(({ data }) => data);
  }

  login(user) {
    const { usernameOrEmail, password } = user;
    return this.auth
      .post("/auth/login", { usernameOrEmail, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/me").then((response) => response.data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
