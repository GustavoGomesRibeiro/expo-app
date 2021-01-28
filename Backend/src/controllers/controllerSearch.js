const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const filters = request.query;

    if (!filters.service) {
      return response.status(400).json({
        error: "Missing filters to search!",
      });
    }

    const service = await connection("services")
      .where("services.service", "=", filters.service)
      .join("company", "services.company_id", "=", "company.id")
      .select(["company.*", "services.*"]);

    return response.json(service);
  },
};
