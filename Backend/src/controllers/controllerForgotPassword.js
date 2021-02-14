const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(response, request) {
    const { email } = request.body;

    const user = await connection("users")
      .where("email", email)
      .select("users.email")
      .first();
    // .join("establishments")
    // .select(["users.*", "establishments.email"]);

    if (!user) return response.status(400).send({ error: "User not found" });

    const token = crypto.randomBytes(20).toString("hex");

    const now = new Date();
    now.setHours(now.getHours() + 1);

    const updatePassword = await connection("users")
      .where("id", user.id)
      .update({ passwordResetToken: token, passwordResetExpires: now });

    // await connection("users").insert({
    //   email,
    //   passwordResetToken: token,
    //   passwordResetExpires: now,
    // });

    console.log(token, now, updatePassword);

    return response.json({ user, token, now });
  },
};
