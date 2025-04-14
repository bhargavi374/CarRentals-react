const mongoose = require('mongoose');

const DB = process.env.MONGO_URI;
mongoose.connect(DB).then(
    ()=>{
        console.log("DB connected...")
    })
    // const mongoose = require('mongoose');
    // const DB = process.env.MONGO_URI;
    
    // mongoose.connect(DB)
    //   .then(() => {
    //     console.log("DB connected...");
    //   })
    //   .catch(err => {
    //     console.error("DB connection error:", err);
    //   });
    
    