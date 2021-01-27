const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const listImages = await connection("images").select("*");
    return response.json(listImages);
  },

  async show(request, response) {
    const { id } = request.params;

    const listImages = await connection("images").where("id", id);

    return response.json(listImages);
  },
};
