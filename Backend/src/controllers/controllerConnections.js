const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const totalConnections = await connection("connections").count(
      "* as total"
    );

    const { total } = totalConnections[0];

    return response.json({ total });
  },

  async create(request, response) {
    const { establishment_id } = request.body;

    await connection("connections").insert({
      establishment_id,
    });

    return response.status(201).send();
  },
};
