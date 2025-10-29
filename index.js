const express = require('express');
const app = express();
const PORT = 3309;
const db = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.listen(PORT,() => {
console.log('Server started on port 3009');
})
db.sequelize.sync()
    .then((result) =>{
        app.listen(3009, () => {
            console.log('Server Started');
        })
    })
    .catch((err) => {
        console.log(err);
    })

    app.post('/komik' , async (req, res) => {
        const data = req.body;
        try{
            const komik = await db.Komik.create(data);
            res.send(komik);
        } catch (error){}
        res.send({massage: error.massage});
    });

    app.get('/komik', async (req, res) => {
        try{
            const komik = await db.Komik.findAll();
            res.send(komik);
        }
        catch (error){
            res.send ({massage: error.massage});
        }
    });
