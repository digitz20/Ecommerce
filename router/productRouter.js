const {createProduct, getAllProducts, getOneProduct, updateUserProduct, deleteProduct} = require("../controller/productController")


const productRouter = require("express").Router()

productRouter.post("/createProduct/:id", createProduct)

productRouter.get("/getuserProduct" , getAllProducts)

productRouter.get("/getOneProduct/:id" , getOneProduct)

productRouter.put("/updateProduct/:id", updateUserProduct)

productRouter.delete("/deleteProduct/:id", deleteProduct)

module.exports = productRouter