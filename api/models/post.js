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
    static async orderByTime(){
        const response = await db.query("SELECT * FROM entries ORDER BY time_of_entry")
        return response.rows.map(entry => new Entries(entry))
    }

    static async createEntry(data){
        let {user_id, title, category, content} = data
        user_id = parseInt(user_id)
        let newEntryID = await db.query("INSERT INTO entries(user_id, title, category, content, time_of_entry) VALUES ($1, $2, $3, $4, NOW()) RETURNING *;", [user_id, title,category,content]);
        return new Entries(newEntryID.rows[0])
    }
    static async updateContent(entry_id, newcontent){
        const updated = await db.query("UPDATE entries SET content = $1 WHERE entry_id =$2 RETURNING *", [newcontent, entry_id])
        return new Entries(updated.rows[0])
    }
    static async deleteEntry(entry_id){
        const deleted = await db.query("DELETE FROM entries WHERE entry_id = $1 RETURNING *", [entry_id])
        return new Entries(deleted.rows[0])
    }
}

module.exports = Entries;