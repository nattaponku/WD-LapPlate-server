module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'egatDashboardDB',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './egatDashboard-db.sqlite'
        },
    },
    // db: {
    //     database: process.env.DB_NAME || 'nvwebblog',
    //     user: process.env.DB_User || 'root',
    //     password: process.env.DB_PASS || '1234',
    //     options: {
    //         dialect: process.env.DIALECT || 'mysql',
    //         // storage: './nvwebblog-db.sqlite'
    //         host: process.env.HOST || 'localhost',
    //     },
    // },
    authentication: {
        jwtSecret: "test"
    }
}