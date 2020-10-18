const connection = require('../database/connection');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = {
    async  create  (request, response){

        const { username, password } = request.body;

        const user = await connection('users')
            .where('username', username)
            .select('id', 'username','password')
            // .where('password', password)
            .first();

            if (!user) {
                return response.status(401).json({ error: 'Incorrect Username/Password try again!'});
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if (!isPasswordCorrect) {
                return response.status(401).json({error: 'Incorrect Username/Password try again!'});
            }

            const token = jwt.sign({userId: user.id}, authConfig.secret, {
                // subject: user.id,
                expiresIn: '1d'
            });
            
            return response.json({user, token});
    }
}
