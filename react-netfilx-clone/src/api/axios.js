import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "03669824bf2959bb9718a49aabc6891f",
    language: "ko-KR",
  }
});

export default instance;