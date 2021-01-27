const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    //filtro

    // const filters = request.query;

    // if ( !filters.service) {
    //     return response.status(400).json({
    //         error: 'Missing filters to search!'
    //     })
    // }

    // const service = await connection('services')
    // .where('establishment_id', establishment_id)
    // .where('services.service', '=', filters.service)
    // .join('establishments', 'services.establishment_id', '=', 'establishments.id')
    // .select(['services.*', 'establishments.*']);

    const company_id = request.headers.authorization;

    const service = await connection("services")
      .where("company_id", company_id)
      .select("*");

    return response.json(service);
  },

  async show(request, response) {
    const { id } = request.params;

    const listServicesById = await connection("services").where("id", id);

    return response.json(listServicesById);
  },

  async create(request, response) {
    const { service, company_id } = request.body;

    const [id] = await connection("services").insert({
      service,
      company_id,
    });
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const company_id = request.headers.authorization;

    const service = await connection("services")
      .where("id", id)
      .select("company_id")
      .first();

    if (service.company_id !== company_id) {
      return response.status(401).json({ error: "Não autorizado" });
    }
    await connection("services").where("id", id).delete();

    return response.status(204).send();
  },
};
