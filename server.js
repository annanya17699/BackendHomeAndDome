const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());


app.use((req, res, next)=>{
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
 next();
})

app.listen(5000)

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@home-and-dome.0mqzc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
// .then(()=>{
//  console.log("connected to db");
//  app.listen(process.env.PORT || 5000);
// })
// .catch(err=> console.log(err));
