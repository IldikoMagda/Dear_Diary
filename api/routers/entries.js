const { Router } = require("express")
const entriesRouter = Router()
const entriesController = require('../controllers/entries')

entriesRouter.get('/', entriesController.index)
entriesRouter.get('/:entryid', entriesController.showOneByEntryID)
entriesRouter.get('/byuser/:userid', entriesController.showAllByUserID)
entriesRouter.get('/ordered', entriesController.showByTime)
entriesRouter.post('/newentry', entriesController.createEntry)

module.exports = entriesRouter