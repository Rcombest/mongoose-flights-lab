import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()


// GET /flights/new
router.get('/new', flightsCtrl.new) 

export {
  router
}
