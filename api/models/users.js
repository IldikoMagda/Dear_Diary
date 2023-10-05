const db = require("../database/connect")

class User {
    constructor({user_id, username, password}){
        this.user_id = user_id
        this.username = username
        this.password = password
    }
    static async getOneByName(name) {
        name = name.toLowerCase()
        const response = await db.query("SELECT * FROM users where LOWER(username) = $1", [username])
        if (response.rows.length<1){
            throw new Error('Unable to locate user')
        }
        return new User(response.rows[0])
    }
    static async getOneById(id) {
        id = parseInt(id)
        const response = await db.query("SELECT * FROM users where user_id = $1", [id])
        if (response.rows.length<1){
            throw new Error('Unable to locate user')
        }
        return new User(response.rows[0])
    }

    static async create(data){
        const {username, password} = data;
        let response = await db.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING user_id0;", [username, password]);
        const newID = response.rows[0].user_id;
        const NewUser = await User.getOneById(newID);
        return NewUser
    }
}
module.exports = User;