module.exports = (sequelize, Sequelize) => {
    const geografia = sequelize.define("geografia", {
        nombre: {
            type: Sequelize.STRING
        },
        poblacion: {
            type: Sequelize.INTEGER
        }   
    });

    return geografia;
};