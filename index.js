const express = require ("express")

const app = express();

app.use(express.json());

app.get('/',(request,response ) =>{
    return response.send("Server is running")
});

app.listen(5000);