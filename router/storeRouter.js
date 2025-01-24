

const {createStore, getAll , getOne , updateUser, deleteStore} = require("../controller/storeController")

const router = require("express").Router()


router.post("/createuser" , createStore)

router.get("/getuser" , getAll)

router.get("/getOne/:id" , getOne)

router.put("/update/:id", updateUser)

router.delete("/delete/:id", deleteStore)



module.exports = router




