"use strict";

/**
 * driver controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::driver.driver", () => ({
  async create(ctx) {
    console.log(ctx.body);
    const { data } = ctx.request.body;
    console.log(data);
    const parsedData = JSON.parse(data);

    const files = ctx.request.files;
    console.log(files);
    const entry = await strapi.entityService.create("api::driver.driver", {
      data: {
        ...parsedData,
      },
      files: {
        cnicFrontImage: files["files.cnicFrontImage"],
        cnicBackImage: files["files.cnicBackImage"],
        licenseFront: files["files.licenseFront"],
        licenseBack: files["files.licenseBack"],
      },
    });
    ctx.send(entry);
    return entry;
  },
}));
