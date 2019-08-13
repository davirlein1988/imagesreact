import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 73ea7e3dbaf8890788cbd056ccc522d0e0a8b40125b16bf36e6930428504af0b",
  },
});
