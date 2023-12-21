const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();

require('dotenv').config();

const PORT=process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

const URL=process.env.MONGODB_URL;

const ConnectMongoDB = (URL) => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(URL);
      console.log("Successfully Connected to MongoDB");
    } catch (err) {
      console.log("MongoDB Connection Failed");
    }
  };
ConnectMongoDB(URL);

//Routes
const adminRoute=require('./routes/authRoute.js');
app.use('/api',adminRoute);
