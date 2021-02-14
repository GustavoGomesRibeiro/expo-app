const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    // const listImages = await connection("images").select("*");
    // const establishment_id = request.headers.authorization;
    const listImages = await connection("images")
      // .where("establishment_id", establishment_id)
      .join("company", "company.establishment_id", "=", "images.id")
      .select(["company.*", "images.*"]);
    return response.json(listImages);
  },

  async show(request, response) {
    const { id } = request.params;

    const listImages = await connection({ i: "images" })
      .where("i.id", id)
      .join("company")
      .select(["company.*", "i.path"]);
    return response.json(listImages);
  },
  async create(request, response) {
    const requestImages = request.files;

    const images = requestImages.map((image) => {
      return { path: image.key, path: image.location };
    });

    const { company_id } = request.body;
    // const company_id = request.headers.authorization;

    for (const image of images) {
      const img = await connection("images").insert({
        path: image.path,
        url: image.location,
        company_id,
      });
      return response.json({ img });
    }
  },
};
