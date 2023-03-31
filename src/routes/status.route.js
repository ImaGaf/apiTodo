const {Router} = require('express');
const changeTaskStatus = require('../controllers/status.controller');

const router = Router()

router.put('/api/v1/status/:id', changeTaskStatus);// Funcionando

module.exports = router;
 