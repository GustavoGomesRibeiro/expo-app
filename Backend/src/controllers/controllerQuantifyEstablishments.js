const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const establishment_id = request.headers.authorization;

    const listEstablishments = await connection("company")
      .where("establishment_id", establishment_id)
      .select("*");

    return response.json(listEstablishments);
  },

  async show(request, response) {
    const { id } = request.params;

    const listEstablishment = await connection("company").where("id", id);
    return response.json(listEstablishment);
  },
};
