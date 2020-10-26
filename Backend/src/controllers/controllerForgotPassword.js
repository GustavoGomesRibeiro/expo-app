const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create ( response, request) {
        const { email } = request.body;

        try {
            const user = await connection('users')
            .where('email', email)
            .join('establishments')
            .select([
                'users.*',
                'establishments.email'
            ]);

            if(!user)
            return response.status(400).send({error: "User not found"});

            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();
            now.setHours (now.getHours() + 1);

            console.log(token, now);
            
        } catch (error) {
            response.status(400).json({ message: 'Erro on forgot password, try again'});
        }
    }
}
