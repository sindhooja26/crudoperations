import { Router } from 'express'

import user from './user'

import manager from './Manager'

const router = new Router()

router.use('/user', user)

router.use('/manager', manager)

export default router
