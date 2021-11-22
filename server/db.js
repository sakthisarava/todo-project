const mongoose = require('mongoose')


const Connect = async () => {
   try {
     const connectionparams = {
      // useNewUrlParser: true,
       //useCreateIndex: true,
       useUnifiedTopology: true
     }
     await mongoose.connect(
     "mongodb+srv://sakthi:cJf4gatblMSGAKAt@cluster0.rngnz.mongodb.net/todo-app?retryWrites=true&w=majority",
       connectionparams
     )     
        console.log("Connected to database.")
    } catch (error) {
      console.log("Could not connect to database.", error)
    }
}

module.exports = Connect