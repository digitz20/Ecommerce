const {products} = require("../models")

const {v4:uuidv4} = require("uuid")
                    
exports.createProduct = async(req, res)=> {
    try {
        

        const data = {
            id: uuidv4(),
            storeId: req.params.id,
            productName:req.body.productName,
            productQty: req.body.productQty,
            productAmount: req.body.productAmount
        }


        const newProduct = await products.create(data)

        res.status(201).json({message: `new product added successfully`, data: newProduct})

    } catch (error) {
        res.status(500).json({message: 'Error creating store', error: 'invalid id for product'})
    }
}







exports.getAllProducts = async(req,res)=>{
    try {
        const allProducts = await products.findAll()

        res.status(200).json({message:`kindly find below all products`, "total number of products":allProducts.length, data:allProducts})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

};









exports.getOneProduct = async (req, res) => {
    try {
        const products = await products.findBypk(req.params.id)

        if(!products) {
            return res.status(404).json('product not found')
        }
        req.status(200).json({message: `kindly find below user with the above id`, data:products})
    } catch (error) {

        res.status(500).json({error:error.message})
    }
}









exports.updateUserProduct = async (req , res) => {
    try {
        const updateProduct = await products.findBypk(req.params.id)

        if(!updateProduct) {
            return res.status(404).json('product not found')
        }
  
   const newProduct = await products.update ({
    storeId: req.params.id,
    productName:req.body.productName,
    productQty: req.body.productQty,
    productAmount: req.body.productAmount
  })
  res.status(200).json({message: `product updated`, data:newProduct})
    } catch (error) {
        
        res.status(500).json({error:'Email is already in use'})
        
    }

}






exports.deleteProduct = async (req, res) => {
    try {       
         const newDelete = await products.findBypk(req.params.id)

        if(!newDelete) {
            return res.status(404).json('store not found')
        }
        newDelete.destroy()
        res.status(200).json("product deleted")
  
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}





