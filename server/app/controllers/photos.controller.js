const db = require("../models");
const Photos = db.photos;

exports.create = (req, res) => {
    console.log(req.body);
    Photos.create(req.body)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Could not insert the data",
            });
        });
};
exports.findAll = (req, res) => {
    Photos.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred",
            });
        });
};
exports.findOne = (req, res) => {
    const id = req.params.id;
    Photos.findByPk(id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    `Some error occurred cannot find data id ${id}`,
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Photos.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Photo was deleted",
                });
            } else {
                res.send({
                    message: "Cannot delete this Photo",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    `Some error occurred cannot find data id ${id}`,
            });
        });
};
exports.update = (req, res) => {
    const id = req.params.id;
    Photos.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Photo updated",
                });
            } else {
                res.send({
                    message: "Photo not found",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    `Some error occurred cannot find data id ${id}`,
            });
        });
};
