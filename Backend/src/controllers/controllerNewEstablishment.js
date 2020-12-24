const { as } = require("../database/connection");
const connection = require("../database/connection");
const yup = require("yup");

module.exports = {
  async index(request, response) {
    const establishment_id = request.headers.authorization;

    const listEstablishments = await connection("newEstablishments").select(
      "*"
    );
    // .where("establishment_id", establishment_id)
    // .join("images", "images.id", "=", "newEstablishments.id")
    // .select(["newEstablishments.*", "images"]);

    return response.json(listEstablishments);
  },

  async show(request, response) {
    const { id } = request.params;

    const listEstablishment = await connection("newEstablishments").where(
      "id",
      id
    );
    // .join('images', 'images.id', '=', 'newEstablishments.id')
    // .select([
    //     'newEstablishments.*',
    //     'images'
    // ]);

    return response.json(listEstablishment);
  },

  async create(request, response) {
    const {
      name,
      industry,
      whatsapp,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
    } = request.body;
    const establishment_id = request.headers.authorization;

    const requestImages = request.files;
    console.log(request.files);

    const data = {
      name,
      industry,
      whatsapp,
      latitude,
      longitude,
      open_on_weekends,
      opening_hours,
      establishment_id,
    };

    const schema = yup.object().shape({
      name: yup.string().required(),
      industry: yup.string().required(),
      whatsapp: yup.number().required(),
      latitude: yup.number().required(),
      longitude: yup.number().required(),
      open_on_weekends: yup.boolean().required(),
      opening_hours: yup.string().required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const [id] = await connection("newEstablishments").insert(data);

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const img = await connection("images").insert({
      images,
    });

    return response.status(201).json({ id, img });
  },
};
