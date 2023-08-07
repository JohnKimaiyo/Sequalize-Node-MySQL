const express = require ("express")
const routes = require('./routes');


const app = express();

app.use(express.json());

app.get('/',(request,response ) =>{
    return response.send("Server is running")
});


app.use(routes);
app.listen(5000);