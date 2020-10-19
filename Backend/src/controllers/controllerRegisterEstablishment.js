const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

module.exports = {
    async  index  (request, response){
        const establishment = await connection('establishments').select('*');

        return response.json({establishment});
    },
     
    async  create  (request, response){
        const { avatar , username, email, password } = request.body;
        
        const checkEstablishment = await connection('establishments')
        .where('username', username)
        .where('email', email)
        .first();

        if ( checkEstablishment ) {
            throw new Error('Username or Email address already used.')
        }

        const hashedPassword = await bcrypt.hash(password, 8);

        await connection('establishments').insert({
            avatar,
            username, 
            email,
            password: hashedPassword,
        });
        console.log()
        return response.json({ avatar , username , email })
    } 
}
