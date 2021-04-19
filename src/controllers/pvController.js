const { Op } = require('sequelize')
const { PV } = require('../models')
// const Sequelize = require('sequelize')

function getColumn(dataSet, propertyName) {
    return dataSet.map((x) => x[propertyName]);
}

module.exports = {
    // get all PV
    async index(req, res) {
        try {
            const pvs = await PV.findAll()
            res.send(pvs)
        } catch (err) {
            res.status(500).send({
                error: 'The pvs information was incorrect'
            })
        }
    },
    // create pv
    async create(req, res) {
        // res.send(JSON.stringify(req.body))
        try {
            const pv = await PV.create(req.body)
            res.send(pv.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create pv incorrect'
            })
        }
    },
    // edit pv, suspend, active
    async put(req, res) {
        try {
            await PV.update(req.body, {
                where: {
                    id: req.params.pvId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update pv incorrect'
            })
        }
    },
    // delete pv
    async remove(req, res) {
        try {
            const pv = await PV.findOne({
                where: {
                    id: req.params.pvId
                }
            })
            if (!pv) {
                return res.status(403).send({
                    error: 'The pv information was incorrect'
                })
            }
            await pv.destroy()
            res.send(pv)
        } catch (err) {
            res.status(500).send({
                error: 'The pv information was incorrect'
            })
        }
    },
    // get pv by id
    async showByDate(req, res) {
        try {
            //const pv = await PV.findById(req.params.pvId)

            const pv = await PV.findAll({
                //limit: 100,
                where: {
                    Time: {
                        [Op.like]: '%' + req.params.date + '%'
                    }
                }
            })
            res.send(pv)
        } catch (err) {
            res.status(500).send({
                error: 'The pv information was incorrect'
            })
        }
    },
    async showTotalByMonth(req, res) {
        try {
            // if(parseInt(req.params.month) < 10){
            //     req.params.month = '0'+req.params.month
            //     console.log(req.params.month)
            // }

            const pv = await PV.findAll({
                //limit: 100,
                where: {
                    Time: {
                        [Op.like]: req.params.month + '-%'
                    }
                }
            })
            const Pac = getColumn(pv, 'Pac')
            const sumPac = Pac.reduce((a, b) => a + b, 0)
            res.send('' + sumPac)

        } catch (err) {
            res.status(500).send({
                error: 'The pv information was incorrect'
            })
        }
    },
    async showTotalByYear(req, res) {
        try {


            const pv = await PV.findAll({
                //limit: 100,
                where: {
                    Time: {
                        [Op.like]: req.params.year + '-%'
                    }
                }
            })
            const Pac = getColumn(pv, 'Pac')
            const sumPac = Pac.reduce((a, b) => a + b, 0)
            res.send('' + sumPac)

        } catch (err) {
            res.status(500).send({
                error: 'The pv information was incorrect'
            })
        }
    },
    async showTotalByDate(req, res) {
        try {
            //const pv = await PV.findById(req.params.pvId)

            const pv = await PV.findAll({
                //limit: 100,
                where: {
                    Time: {
                        [Op.like]: '%' + req.params.date + '%'
                    }
                }
            })

            const Pac = getColumn(pv, 'Pac')

            const sumPac = Pac.reduce((a, b) => a + b, 0)
            console.log(sumPac)
            res.send('' + sumPac)

        } catch (err) {
            res.status(500).send({
                error: 'The pv information was incorrect'
            })
        }
    },
    async showTotalByAllSN(req, res) {   //get structed HERE........................................................
        try {
            // const pv = await PV.findAll({
            //     attributes: [[sequelize.fn('min', sequelize.col('Pac')), 'minPac']],
            // })


            const pv = await PV.findAll({
                // limit:100,
                group: ['Alias'],
                attributes: [
                    'Alias', 
                    'Time',
                    'Pac'
                    // [db.Sequelize.fn('SUM', db.Sequelize.col('Pac')),'total_Pac']

                ], 
                order:[
                    'Alias'
                ],
                
                raw:true
            })
            


            

            

            // const Pac = getColumn(pv,'Pac')

            // const sumPac = Pac.reduce((a, b) => a + b, 0)
            console.log(pv)
            res.send(pv)

        } catch (err) {
            res.status(500).send({
                error: 'The pv information was incorrect'
            })
        }
    }
}