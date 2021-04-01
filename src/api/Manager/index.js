import { Router } from 'express'

import {Addflights,} from './controller'

const router = new Router()

router.post('/',Addflights)

export default router
