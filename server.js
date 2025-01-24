const port = 2014
const express = require("express")
const router = require("./router/storeRouter")
const productRouter = require("./router/productRouter")

const app = express()

app.use(express.json())

app.use(router)

app.use(productRouter)


app.listen(port, ()=> {
    console.log(`my app is running on port ${port}`)
})


