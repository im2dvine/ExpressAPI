// const express = require('express');
// let router = express.Router();

// router.get('/', (req, res) => {
//     res.send('users');
// });

// module.exports = router;

/********/


const express = require('express');
const usersStore = require('../userstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(usersStore.GetUser(id));
    } else {
        res.send(usersStore.GetUsers());
    }
});

router.post('/', (req, res) => {
    usersStore.CreateUser(req.body);
    res.sendStatus(200);
});

module.exports = router;