const mongoose=require("mongoose")

const main=async()=>{
    try {
        return mongoose.connect("mongodb+srv://unity:unity@cluster0.vkdj7nb.mongodb.net/?retryWrites=true&w=majority")
       // mongodb+srv://unity:<password>@cluster0.vkdj7nb.mongodb.net/
       
    .then(()=>console.log('connected to database'))
    .catch((e)=>console.log(e))
    ///conn.disconnect()

    } catch (error) {
        console.log(error);
    }
    
   // console.log("conneted")
   // conn.disconnect()
}

module.exports=main