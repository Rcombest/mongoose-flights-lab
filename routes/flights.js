import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new) 

// GET /flights/:id
router.get('/:id', flightsCtrl.show)

// POST /flights
router.post('/', flightsCtrl.create)

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)

export {
  router
}
