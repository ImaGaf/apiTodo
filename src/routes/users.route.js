const {Router} = require('express');
const { createUser } = require('../controllers/users.controller');

const router = Router()

router.post('/api/v1/users', createUser); //funcionando
module.exports = router;