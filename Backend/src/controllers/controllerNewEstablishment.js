const { as } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {

    async index (request, response ) {
        const establishment_id = request.headers.authorization;

        const listEstablishments = await connection('newEstablishments')
        .where('establishment_id', establishment_id)
        .select('*');

        return response.json(listEstablishments);
    },

    async show (request, response ) {
        const { id } = request.params;

        const listEstablishment = await connection('newEstablishments')
        .where('id', id);

        return response.json(listEstablishment);
    },

    async create (request, response ) {
        const { name, industry, whatsapp, latitude, longitude, open_on_weekends, opening_hours } = request.body;
        const establishment_id = request.headers.authorization;
        const requestImages = request.files;

        const images = requestImages.map(image => {
            return { path: image.filename}
        });

        const [ id ] = await connection('newEstablishments').insert({
            name,
            industry,
            whatsapp,
            latitude,
            longitude,
            open_on_weekends,
            opening_hours,
            establishment_id,
            images
        });

        return response.status(201).json({ id })
    }
}
