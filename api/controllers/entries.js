const Entries = require("../models/post")

async function index(req, res){
    try{
        const entries = await Entries.getAll()
        res.status(200).json(entries)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}
async function showOneByEntryID (req,res){
    try{
        entry_id = parseInt(req.params.entryid)
        const entry = await Entries.getOneByEntryId(entry_id)
        res.status(200).json(entry)
    }catch(error){
        res.status(404).json({ error: error.message})
    }
}
async function showAllByUserID (req, res){
    try{
        user_id = parseInt(req.params.userid)
        const entries = await Entries.getAllByUserID(user_id)
        res.status(200).json(entries)

    }catch(error){
        res.status(404).json({ error: error.message})
    }
}
async function showByTime (req, res){
    try{
        const entries = await Entries.orderByTime()
        res.status(200).json(entries)
    }catch(error){
        res.status(500).json({ error: error.message})
    }
}
async function createEntry(req,res){
    try{
        let data = req.body;
        const newEntry = await Entries.createEntry(data)
        res.status(200).json(newEntry)
    }catch(error){
        res.status(404).json({ error: error.message})
    }
}

module.exports = { index, showOneByEntryID, showAllByUserID, showByTime, createEntry}