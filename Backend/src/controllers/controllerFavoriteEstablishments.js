const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const establishment_id = request.headers.authorization;

    const listFavoriteEstablishment = await connection("favorites")
      .where("establishment_id", establishment_id)
      .select("*");
    return response.json(listFavoriteEstablishment);
  },

  async create(request, response) {
    const { user_id } = request.body;

    const establishment_id = request.headers.authorization;
    const [id] = await connection("favorites").insert({
      user_id,
      establishment_id,
    });
    console.log();
    return response.json({ id });
  },
};
