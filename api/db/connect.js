const mongoose = require('mongoose');

const DB = process.env.MONGO-URL;
mongoose.connect(DB).then(
    ()=>{
        console.log("DB connected...")
    }
)