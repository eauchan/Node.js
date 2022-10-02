import {getToDo, getToDoList, postToDo} from '../controller/user'
import express from 'express'

const router = express.Router();

router.get('/:id', getToDo)
router.get('/', getToDoList)
router.post('/register', postToDo)

export default router;
