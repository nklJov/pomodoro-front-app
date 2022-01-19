import axios from "axios";

const heroku = "https://pomodoro-nkl.herokuapp.com"
const localhost = "http://localhost:5000"


const instance = axios.create({
  baseURL: heroku
});

export default instance;