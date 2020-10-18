const connection = require('../database/connection');

module.exports = {
    async testUser (request, response){
        const { id, username } = request.body;

        const user = await connection('users')
        .where('id', id)
        .select('id')
        .first()

        return response.send(user.username);
    },

    async testEstablishment (request, response){
        const { id, username } = request.body;

        const user = await connection('users')
        .where('id', id)
        .select('id')
        .first()

        
        return response.send(user.username);
    },
}