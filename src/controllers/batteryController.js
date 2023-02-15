const { Op } = require('sequelize')
const { Batteries } = require('../models')
// const Sequelize = require('sequelize')

// function getColumn(dataSet, propertyName) {
//     return dataSet.map((x) => x[propertyName]);
// }

module.exports = {
    // get all Battery
    async index(req, res) {
        try {
            console.log(JSON.stringify(Batteries))
            const batteries = await Batteries.findAll()
            
            res.send(batteries)
        } catch (err) {
            res.status(500).send({
                error: 'The batteries information was incorrect'
            })
        }
    },
    // create battery
    async create(req, res) {
        // res.send(JSON.stringify(req.body))
        try {
            console.log(JSON.stringify(req.body))
            const battery = await Batteries.create(req.body)
            res.send(battery.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create battery incorrect'
            })
        }
    },
    // edit battery, suspend, active
    async put(req, res) {
        try {
            await Batteries.update(req.body, {
                where: {
                    id: req.params.batteryId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update battery incorrect'
            })
        }
    },
    // delete battery
    async remove(req, res) {
        try {
            const battery = await Batteries.findOne({
                where: {
                    id: req.params.batteryId
                }
            })
            if (!battery) {
                return res.status(403).send({
                    error: 'The battery information was incorrect'
                })
            }
            await battery.destroy()
            res.send(battery)
        } catch (err) {
            res.status(500).send({
                error: 'The battery information was incorrect'
            })
        }
    },
    // get battery by id
    async showByDate(req, res) {
        try {
            //const battery = await Battery.findById(req.params.pvId)

            const battery = await Batteries.findAll({
                //limit: 100,
                where: {
                    Time: {
                        [Op.like]: '%' + req.params.date + '%'
                    }
                }
            })
            res.send(battery)
        } catch (err) {
            res.status(500).send({
                error: 'The battery information was incorrect'
            })
        }
    },
    // async showTotalByMonth(req, res) {
    //     try {
    //         // if(parseInt(req.params.month) < 10){
    //         //     req.params.month = '0'+req.params.month
    //         //     console.log(req.params.month)
    //         // }

    //         const battery = await PV.findAll({
    //             //limit: 100,
    //             where: {
    //                 Time: {
    //                     [Op.like]: req.params.month + '-%'
    //                 }
    //             }
    //         })
    //         const Pac = getColumn(pv, 'Pac')
    //         const sumPac = Pac.reduce((a, b) => a + b, 0)
    //         res.send('' + sumPac)

    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The pv information was incorrect'
    //         })
    //     }
    // },
    // async showTotalByYear(req, res) {
    //     try {


    //         const pv = await PV.findAll({
    //             //limit: 100,
    //             where: {
    //                 Time: {
    //                     [Op.like]: req.params.year + '-%'
    //                 }
    //             }
    //         })
    //         const Pac = getColumn(pv, 'Pac')
    //         const sumPac = Pac.reduce((a, b) => a + b, 0)
    //         res.send('' + sumPac)

    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The pv information was incorrect'
    //         })
    //     }
    // },
    // async showTotalByDate(req, res) {
    //     try {
    //         //const pv = await PV.findById(req.params.pvId)

    //         const pv = await PV.findAll({
    //             //limit: 100,
    //             where: {
    //                 Time: {
    //                     [Op.like]: '%' + req.params.date + '%'
    //                 }
    //             }
    //         })

    //         const Pac = getColumn(pv, 'Pac')

    //         const sumPac = Pac.reduce((a, b) => a + b, 0)
    //         console.log(sumPac)
    //         res.send('' + sumPac)

    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The pv information was incorrect'
    //         })
    //     }
    // },
    // async showTotalByAllSN(req, res) {   //get structed HERE........................................................
    //     try {
    //         // const pv = await PV.findAll({
    //         //     attributes: [[sequelize.fn('min', sequelize.col('Pac')), 'minPac']],
    //         // })


    //         const pv = await PV.findAll({
    //             // limit:100,
    //             group: ['Alias'],
    //             attributes: [
    //                 'Alias', 
    //                 'Time',
    //                 'Pac'
    //                 // [db.Sequelize.fn('SUM', db.Sequelize.col('Pac')),'total_Pac']

    //             ], 
    //             order:[
    //                 'Alias'
    //             ],
                
    //             raw:true
    //         })
            


            

            

    //         // const Pac = getColumn(pv,'Pac')

    //         // const sumPac = Pac.reduce((a, b) => a + b, 0)
    //         console.log(pv)
    //         res.send(pv)

    //     } catch (err) {
    //         res.status(500).send({
    //             error: 'The pv information was incorrect'
    //         })
    //     }
    // }
}