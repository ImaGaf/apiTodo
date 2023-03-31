const {Router} = require('express');
const { createNewTask,getAllTask, deleteTask } = require('../controllers/task.controller');

const router = Router()

router.post('/api/v1/todo', createNewTask);// funcionando
router.get('/api/v1/todo/:id', getAllTask);
router.delete('/api/v1/todo/:id', deleteTask);

module.exports = router;