const connection = require('../database/connection');

const bcrypt = require('bcryptjs');

module.exports = {
    async  index  (request, response){
        const establishment = await connection('establishments').select('*');

        return response.json({establishment});
    },
     
    async  create  (request, response){
        const { avatar , username, email, establishment,industry, password, whatsapp, latitude, longitude } = request.body;
        
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
            establishment,
            industry,
            password: hashedPassword,
            whatsapp,
            latitude,
            longitude
        });
        console.log()
        return response.json({avatar , username ,email, establishment,industry, whatsapp, latitude, longitude})
    } 
}
