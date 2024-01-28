"use strict";
const wp = require("webpack");

module.exports = (config, webpack) => {
  config.plugins.push(
    new wp.DefinePlugin({
      CUSTOM_VARIABLES: {
        STRAPI_ADMIN_FE_ORIGIN: JSON.stringify(
          process.env.STRAPI_ADMIN_FE_ORIGIN
        ),
      },
    })
  );
  return config;
};
