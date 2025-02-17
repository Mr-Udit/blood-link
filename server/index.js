import express from 'express';




app.get('/', (req, res) => {    
    res.send('Hello World');
    });
    




const app = express();
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});