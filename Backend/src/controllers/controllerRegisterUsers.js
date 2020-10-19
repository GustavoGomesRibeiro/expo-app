const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

module.exports = {
    async  index  (request, response){
        const user = await connection('users').select('*');

        return response.json({user});
    },
    
    async  create  (request, response){
        const { avatar, email, username, password } = request.body;

        const checkUser = await connection('users')
        .where('username', username)
        .where('email', email)
        .first();

        if (checkUser){
            throw new Error('Username or Email address already used.')
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        await connection('users').insert({
            avatar,
            email,
            username,
            password: hashedPassword,
        });

        console.log();

        return response.json({avatar,email,username});
    } 
}