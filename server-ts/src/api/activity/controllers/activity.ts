/**
 * activity controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::activity.activity",
  ({ strapi }) => ({

    async count(ctx) {
      const entityId = ctx.params.id;
      try {
        let activity = await strapi.entityService.findOne(
          "api::activity.activity",
          entityId
        );
        activity = await strapi.entityService.update(
          "api::activity.activity",
          entityId,
          { data: { Count: (activity.Count || 0) + 1 } }
        );
        ctx.body = { ok: 1, Count: activity.Count };
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
