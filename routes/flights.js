import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index) 
router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)
router.get('/:id', flightsCtrl.show)
router.delete("/:id", flightsCtrl.delete)
router.get("/:id/edit", flightsCtrl.edit)

export {
  router
}
