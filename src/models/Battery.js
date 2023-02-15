module.exports = (sequelize, DataTypes) => {
    const Batteries = sequelize.define('Batteries', {
        timestamp: DataTypes.TEXT,
        sn: DataTypes.TEXT,
        battery_status: DataTypes.TEXT,
        soc: DataTypes.REAL,
        mode: DataTypes.TEXT,
        rated_capacity: DataTypes.REAL,
        working_status: DataTypes.TEXT,
        temperature: DataTypes.REAL,
        bus_v: DataTypes.REAL,
        bus_i: DataTypes.REAL,
        charge_discharge_power: DataTypes.REAL
    })
    return Batteries
}