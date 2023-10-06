const { Router } = require("express")
const entriesRouter = Router()
const entriesController = require('../controllers/entries')

entriesRouter.get('/', entriesController.index)
entriesRouter.get('/:entryid', entriesController.showOneByEntryID)
entriesRouter.get('/byuser/:userid', entriesController.showAllByUserID)

module.exports = entriesRouter