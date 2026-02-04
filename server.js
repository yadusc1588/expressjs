import express from 'express';

const app = express();
const port = 3000;

const router = express.Router();


app.get('/', (req,res) => {
    res.send("Hello from the Cars API!");

});

app.get('/api/v1/cars',(req,res)=>{
res.send("All cars");
})

app.post('/api/v1/cars',(req,res)=> {
    res.send('New Car');
})

app.put('api/v1/cars/:id',(req,res) => {
    res.send('Update Car')
})

app.delete('api/v1/cars/:id',(req,res) => {
    res.send('Delete Car');
})
app.get('api/v1/cars/:id',(req,res) => {
    res.send('Get Car');
})

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));