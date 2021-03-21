const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
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

    const [id] = await connection("services").returning("id").insert({
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
