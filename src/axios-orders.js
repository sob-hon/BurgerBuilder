import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-e00ae-default-rtdb.firebaseio.com/",
});

export default instance;
