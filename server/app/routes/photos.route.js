module.exports = (app) => {
    const photos = require("../controllers/photos.controller.js");
    const router = require("express").Router();

    router.get("/", photos.findAll);
    router.post("/", photos.create);
    router.get("/:id", photos.findOne);
    router.delete("/:id", photos.delete);
    router.put("/:id", photos.update);

    app.use("/api/photo", router);
};
