"use strict";

/**
 * password controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::password.password",
  ({ strapi }) => ({
    async verify(ctx) {
      // Check if password is enabled
      const { enable_password } = await strapi
        .service("api::config.config")
        .find();
      if (enable_password === false) {
        return ctx.send();
      }

      // Validate password
      const { password } = ctx.request.body;
      if (!password) {
        return ctx.send({ message: "No password provided" }, 400);
      }
      const { results } = await strapi.service("api::password.password").find();
      if (!results || results.length === 0) {
        return ctx.send({ message: "No passwords found" }, 404);
      }
      const data = results.filter((p) => p.password === password);
      if (data.length === 0) {
        return ctx.send({ message: "Password is incorrect" }, 403);
      }
      ctx.send();
    },
  })
);
