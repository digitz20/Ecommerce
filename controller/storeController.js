const { stores } = require("../models")
const {v4:uuidv4} = require("uuid")
// const store = require("../models/stores")
// console.log(store)

exports.createStore = async (req, res) => {
    try{
        const StoreData = {
            id:uuidv4(),
            storeName:req.body.storeName,
            location:req.body.location,
            email:req.body.email,
        }
        console.log(StoreData)

        if(!stores) {
            return res.status(500).json({message: 'Model not found'})
        }
        const newstore = await stores.create(StoreData);

        res.status(201).json({message: 'store created', store: newstore})

    }catch (error){
        res.status(500).json({message: 'Error creating store', error: 'Email is already in use'})

    }
}




exports.getAll = async(req,res)=>{
    try {
        const allUser = await stores.findAll()

        res.status(200).json({message:`kindly find below all stores`, "total number of stores":allUser.length, data:allUser})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }

};




exports.getOne = async (req, res) => {
    try {
        const store = await stores.findBypk(req.params.id)

        if(!store) {
            return res.status(404).json('store not found')
        }
        req.status(200).json({message: `kindly find below user with the above id`, data:store})
    } catch (error) {

        res.status(500).json({error:error.message})
    }
}





exports.updateUser = async (req , res) => {
    try {
        const store = await stores.findBypk(req.params.id)

        if(!store) {
            return res.status(404).json('store not found')
        }
  
   const newInfo = await store.update ({
    storeName:req.body.storeName,
    location:req.body.location
  })
  res.status(200).json({message: `store updated`, data:newInfo})
    } catch (error) {
        
        res.status(500).json({error:'Email is already in use'})
        
    }
    
}




exports.deleteStore = async (req, res) => {
    try {       
         const store = await stores.findBypk(req.params.id)

        if(!store) {
            return res.status(404).json('store not found')
        }
        store.destroy()
        res.status(200).json("store deleted")
  
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

