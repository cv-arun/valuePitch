
const userModel = require('../model/userModel')
module.exports = {

    addUser: async (req, res) => {
        try {
            console.log(req.body)
            const data = await userModel.create(req.body)
            res.json({ msg: "user added" })
        } catch (err) {
            res.json({ err })
        }


    },
    getUser: async (req, res) => {
        try {
            const data = await userModel.find()
            res.json(data)
        } catch (err) {
            res.json({ err })
        }


    },
    updateUser: async (req, res) => {
        try {
            // const data = await userModel.find()
            const data=await userModel.findByIdAndUpdate(req.body._id,req.body)
            console.log(req.body)
            res.json({msg:'data updated'})
        } catch (err) {
            res.json({ err })
        }


    },
    DeleteUser: async (req, res) => {
        try {
            console.log(req.params.id,"params")
            const data=await userModel.findByIdAndRemove(req.params.id)
            console.log(data,"fdsfkjdnjkds")
            res.json({msg:'data deleted'})

        } catch (err) {
            res.json({ err })
        }


    }



}