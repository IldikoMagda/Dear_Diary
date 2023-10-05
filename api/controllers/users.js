const bcrypt = require('bcrypt'); 
const User = require('../models/users')

async function register  (req, res) {
    try{
        const data = req.body
        const saltRounds = 10; 
        const hashed = await bcrypt.hash(data["password"], saltRounds)
        data['password'] = hashed
        const result = await User.create(data)
        res.status(201).send(data)
    }catch(error){
        res.send(400).json({error: error.message})
    }
};
async function login(req, res) {
    const data = req.body
    try{
        const user=  await User.getOneByName(data.username)
        const legit = await bcrypt.compare(data.password, user['password'])
        if (!legit){
            throw new Error("Incorrect details entered")
        }else{
            res.status(200).json({ authenticated: true})
        }
    }catch(error){
        res.status(401).json({error: error.message})
    }
}
module.exports ={
    register, login
}