const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const listFavoriteEstablishment = await connection("favorites")
      .join("company", "favorites.company_id", "=", "company.id")
      .select([
        "favorites.*",
        "company.name",
        "company.industry",
        "company.whatsapp",
        "company.latitude",
        "company.longitude",
        "company.open_on_weekends",
        "company.opening_hours",
      ]);
    return response.json(listFavoriteEstablishment);
  },

  async show(request, response) {
    const { id } = request.params;

    const listFavorites = await connection("favorites").where("id", id);

    return response.json(listFavorites);
  },

  async create(request, response) {
    const { user_id, company_id } = request.body;

    const [id] = await connection("favorites").returning("id").insert({
      user_id,
      company_id,
    });
    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    // const company_id = request.headers.authorization;

    const favorite = await connection("favorites")
      .where("id", id)
      .select("company_id")
      .first();

    // if (favorite.company_id !== parseInt(company_id)) {
    //   return response.status(401).json({ error: "Não autorizado" });
    // }
    await connection("favorites").where("id", id).delete();
    // return response.status(204).send();
    return response.json({ favorite });
  },
};
