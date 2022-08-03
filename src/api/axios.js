import axios from "axios";

export default axios.create({
  // url of where server is listening to (node.js)
  // change if needed for java
  baseURL: "http://localhost:4242",
});
