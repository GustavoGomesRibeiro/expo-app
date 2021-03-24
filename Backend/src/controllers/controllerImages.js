const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const listImages = await connection("images")
      .join("company", "images.company_id", "=", "company.id")
      .select(["company.*", "images.*"]);
    return response.json(listImages);
  },

  async show(request, response) {
    const { id } = request.params;

    const listImages = await connection({ i: "images" })
      .where("i.id", id)
      .join("company", "i.company_id", "=", "company.id")
      .select(["company.*", "i.path"]);
    return response.json(listImages);
  },
  async create(request, response) {

    const { company_id } = request.body;

    const requestImages = request.files;

    const images = requestImages.map((image) => {
      return { path: image.key, path: image.location };
    });

    for (const image of images) {
      const img = await connection("images").insert({
        path: image.path,
        url: image.location,
        company_id,
      });
    }
    return response.json({ images });
  },
};
