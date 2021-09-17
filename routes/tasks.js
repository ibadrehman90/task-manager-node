const express = require('express')
const router = express.Router()
const {
    getAllTasks,
    getAllCompletedTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    signup
} = require('../controllers/tasks')


// router.route('/').get().post()
// router.route('/:id').put().delete()

router.route('/').post(createTask)
router.route('/user/:user_id').get(getAllTasks)
router.route('/user/completed/:user_id').get(getAllCompletedTasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router