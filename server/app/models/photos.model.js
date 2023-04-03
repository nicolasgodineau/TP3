module.exports = (connex, Sequelize) => {
    const Photos = connex.define("photos", {
        name: {
            type: Sequelize.STRING,
        },
        photo: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.REAL,
        },
        description: {
            type: Sequelize.TEXT,
        },
        categorie: {
            type: Sequelize.STRING,
        },
    });
    return Photos;
};
