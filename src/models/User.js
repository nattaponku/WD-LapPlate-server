const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return
    }

    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
        user.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
        zipCode: DataTypes.STRING,
        about: DataTypes.STRING,
        workplace: DataTypes.STRING,
        position: DataTypes.STRING,
        province: DataTypes.STRING,
        status: DataTypes.STRING,
        img: DataTypes.STRING
    }, {
    hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword
        }
    })
    
    User.prototype.comparePassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }
    User.associate = function (models) {}

    return User
}