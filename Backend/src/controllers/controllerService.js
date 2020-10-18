const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const filters = request.query;

        if ( !filters.service) {
            return response.status(400).json({
                error: 'Missing filters to search!'
            })
        }
        const establishment_id = request.headers.authorization;

        const service = await connection('services')
        .where('establishment_id', establishment_id)
        .where('services.service', '=', filters.service)
        .join('establishments', 'services.establishment_id', '=', 'establishments.id')
        .select(['services.*', 'establishments.*']);

        return response.json( service );
    },

    async create (request, response) {
        const { service, coast } = request.body;
        const establishment_id = request.headers.authorization;

        const [id] = await connection('services').insert({
            service,
            coast,
            establishment_id
        });
        console.log()
        return response.json({ id });
    },

    async delete (request, response){
        const { id } = request.params;
        const establishment_id = request.headers.authorization;
 
        const service = await connection('services')
        .where('id', id)
        .select('establishment_id')
        .first();

        if(service.establishment_id !== establishment_id) {
            return response.status(401).json({error: 'Não autorizado'})
        }
        await connection('services').where('id', id).delete();

        return response.status(204).send();
    }
}
