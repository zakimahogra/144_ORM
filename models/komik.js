module.exports = (sequelize, DataTypes)=> {
    const Komik = sequelize.define("Komik",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            aoutoIncrement: true
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        penulis: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: "Komik",
        freezeTableName: true,
        timestamps: true
    });
    return Komik;
};