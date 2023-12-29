import express from 'express'
import mongooose from 'mongoose' 
import cors from 'cors'

import userRoutes from './routes/users.js'

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a stack overflow clone API")
})
app.use('/user', userRoutes)
const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.cg8t2dd.mongodb.net/?retryWrites=true&w=majority"

mongooose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); }))
    .catch((err) => console.log(err.message))