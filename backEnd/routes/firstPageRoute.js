const express = require('express')
const router = express.Router();
const { addUser,getUser,updateUser,DeleteUser } = require('../controllers/firstPageController')

router.route('/user').post(addUser).get(getUser).put(updateUser)
router.route('/delete-user/:id').delete(DeleteUser)

module.exports = router
