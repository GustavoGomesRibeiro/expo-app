const connection = require('../database/connection');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = {
    async  create  (request, response){

        const { username, password } = request.body;

        const establishment = await connection('establishments')
            .where('username', username)
            .select('id', 'username', 'password')
            // .where('password', password)
            .first();

            if (!establishment) {
                return response.status(401).json({ error: 'Incorrect Username/Password try again!'});
            }

            const isPasswordCorrect = await bcrypt.compare(password, establishment.password);

            if (!isPasswordCorrect) {
                return response.status(401).json({ error: 'Incorrect Username/Password try again!' });
            }

            const token = jwt.sign({ userId: establishment.id}, authConfig.secret, {
                expiresIn: '1d'
            })
            return response.json({ establishment, token});
    } 
}