import { Router } from 'express'

import { AddData,GetData,DeleteData, Updatedata

 } 
 from './controller'

const router = new Router()

router.post('/AddData', AddData)
router.get('/GetData', GetData)

router.put('/updatedata/:id',Updatedata)
router.delete('/DeleteData/:id',DeleteData)

export default router
