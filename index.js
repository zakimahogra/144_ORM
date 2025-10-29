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

    