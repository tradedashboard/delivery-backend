
        const app = require('./app')
        const dotenv = require('dotenv')
        dotenv.config({path : "./environment/config.env"})
        const server = app.listen(process.env.PORT, (req, res)=>{
            console.log('The app is live')
        })    
        