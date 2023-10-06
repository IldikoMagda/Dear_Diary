const db = require('../database/connect');

class Entries{
    constructor({ entry_id, user_id, title, category,content, time_of_entry}){
        this.entry_id = entry_id;
        this.user_id = user_id;
        this.title = title;
        this.category = category;
        this.content = content;
        this.time_of_entry = time_of_entry
    }
    static async getAll(){
        const response = await db.query("SELECT * FROM entries")
        return response.rows.map(entry => new Entries(entry))
    }
    static async getOneByEntryId(entry_id){
        entry_id = parseInt(entry_id)
        const res = await db.query("SELECT * FROM entries WHERE entry_id = $1", [entry_id])
        if (res.rows.length != 1){
            throw new Error("Can't locate entry with that entry_id")
        }
        return new Entries(response.rows[0])
    }
    static async getAllByUserID(user_id){
        const res = await db.query("SELECT * FROM entries WHERE user_id = $1", [user_id])
        if (res.rows.length<1){
            throw new Error("we don't have any entries with that user_id")
        }
        return res.rows.map(entry => new Entries(entry))
    }
}

module.exports = Entries;