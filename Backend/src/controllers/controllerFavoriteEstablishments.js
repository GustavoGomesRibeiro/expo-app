const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const establishmentFavorited_id = request.headers.authorization;

    const listFavoriteEstablishment = await connection("favorites")
      .where("establishmentFavorited_id", establishmentFavorited_id)
      .join("newEstablishments")
      .select([
        "favorites.*",
        "newEstablishments.name",
        "newEstablishments.industry",
        "newEstablishments.whatsapp",
        "newEstablishments.latitude",
        "newEstablishments.longitude",
        "newEstablishments.open_on_weekends",
        "newEstablishments.opening_hours",
        "newEstablishments.establishment_id",
        "newEstablishments.created_at",
        "newEstablishments.updated_at",
      ]);
    return response.json(listFavoriteEstablishment);
  },

  // async show(request, response) {

  // },

  async create(request, response) {
    const { user_id } = request.body;

    const establishmentFavorited_id = request.headers.authorization;
    const [id] = await connection("favorites").insert({
      user_id,
      establishmentFavorited_id,
    });
    console.log();
    return response.json({ id });
  },
  async delete(request, response) {
    const { id } = request.params;
    const establishmentFavorited_id = request.headers.authorization;

    const favorite = await connection("favorites")
      .where("id", id)
      .select("establishmentFavorited_id")
      .first();

    if (favorite.establishmentFavorited_id !== establishmentFavorited_id) {
      return response.status(401).json({ error: "Não autorizado" });
    }
    await connection("favorites").where("id", id).delete();

    return response.status(204).send();
  },
};
