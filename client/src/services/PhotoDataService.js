import http from "../http-common";
class PhotoDataService {
    /*     getAll() {
        return http.get("/photo");
    }

    create(data) {
        return http.post("/photo", data);
    } */

    getAll() {
        return http.get("/photo");
    }

    get(id) {
        return http.get(`/photo/${id}`);
    }

    create(data) {
        return http.post("/photo/", data);
    }

    update(id, data) {
        return http.put(`/photo/${id}`, data);
    }

    delete(id) {
        return http.delete(`/photo/${id}`);
    }
}
export default new PhotoDataService();
