const { Router } = require("express")
const entriesRouter = Router()
const entriesController = require('../controllers/entries')

entriesRouter.get('/', entriesController.index)
entriesRouter.get('/:entryid', entriesController.showOneByEntryID)
entriesRouter.get('/byuser/:userid', entriesController.showAllByUserID)
entriesRouter.get('/ordered', entriesController.showByTime)
entriesRouter.post('/newentry', entriesController.createEntry)
entriesRouter.patch('/:entryid', entriesController.updateEntry)
entriesRouter.delete('/:entryid', entriesController.deleteEntry)

module.exports = entriesRouter