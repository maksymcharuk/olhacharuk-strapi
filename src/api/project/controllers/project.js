"use strict";

/**
 * project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    const { populate } = ctx.query;

    const query = { where: { slug } };

    if (populate) {
      if (typeof populate === "string") {
        query.populate = populate.split(",").map((field) => field.trim());
      }
    }

    const entity = await strapi.db.query("api::project.project").findOne(query);

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
