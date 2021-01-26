import axios from "axios";

// const URL = "http://localhost:5000";
// const URL = "https://quyyeungoc.herokuapp.com"

export default {
  async getShowDays() {
    return await axios.get("/api/getShowDays");
  },
  async getShowFull() {
    return await axios.get("/api/getShowFull");
  },
  async getAvatar() {
    return await axios.get("/api/getAvatar");
  },
  async getAllImage() {
    return await axios.get("/api/getAllImage");
  },
  async getImage(value) {
    return await axios.get("/api/getImage", value);
  },
  async insertImage(value) {
    return await axios.post("/api/insertImage", value);
  },
  async updateImage(id, value) {
    return await axios.put(`/api/updateImage/${id}`, value);
  },
  async postShowDays(change) {
    return await axios.post(`/api/updateShowDays`, change);
  },
  async postShowFull(change) {
    return await axios.post(`/api/updateShowFull`, change);
  },
  async postAvatar(change) {
    return await axios.post(`/api/updateAvatar`, change);
  },
  async postImage(formData) {
    return await axios.post(
      "https://api.cloudinary.com/v1_1/dnjb58me8/image/upload",
      formData
    );
  },
};
