module.exports = (sequelize, DataTypes) => {
    const PV = sequelize.define('PV', {
        Alias: DataTypes.TEXT,
        Time: DataTypes.TEXT,
        Status: DataTypes.TEXT,
        Vpv1: DataTypes.REAL,
        Ipv1: DataTypes.REAL,
        Ppv1: DataTypes.REAL,
        Vpv2: DataTypes.REAL,
        Ppv2: DataTypes.REAL,
        Ipv2: DataTypes.REAL,
        Vac: DataTypes.REAL,
        Iac: DataTypes.REAL,
        Fac: DataTypes.REAL,
        Pac: DataTypes.REAL,
        PacR: DataTypes.REAL,
        Temperature: DataTypes.REAL,
        Eac_today: DataTypes.REAL,
        Eac_total: DataTypes.REAL,
        T_total: DataTypes.REAL,
        IPM_Temperature: DataTypes.REAL,
        P_BUS_Voltage: DataTypes.REAL,
        Power_Factor: DataTypes.REAL,
        Epv1_today: DataTypes.REAL,
        Epv1_total: DataTypes.REAL,
        Epv2_total: DataTypes.REAL,
        Epv_total: DataTypes.REAL
    })
    return PV
}